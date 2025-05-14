// Function to convert degrees to radians
function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Calculate distance between two points using the Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
}

export interface GeocodedLocation {
  latitude: number;
  longitude: number;
  formattedAddress: string;
}

async function geocodeAddress(address: string): Promise<GeocodedLocation | null> {
  try {
    // Using OpenStreetMap's Nominatim API (free, no API key required)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'TranslateLux Taxi Service' // Required by Nominatim's terms of use
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Geocoding request failed');
    }
    
    const data = await response.json();
    
    if (data && data.length > 0) {
      const location = data[0];
      return {
        latitude: parseFloat(location.lat),
        longitude: parseFloat(location.lon),
        formattedAddress: location.display_name
      };
    }
    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}

export async function calculateRouteDistance(
  pickupAddress: string,
  dropoffAddress: string
): Promise<{ distance: number; formattedAddresses: { pickup: string; dropoff: string } } | null> {
  try {
    const pickup = await geocodeAddress(pickupAddress);
    // Add a small delay between requests to comply with Nominatim's usage policy
    await new Promise(resolve => setTimeout(resolve, 1000));
    const dropoff = await geocodeAddress(dropoffAddress);
    
    if (!pickup || !dropoff) {
      return null;
    }
    
    const distance = calculateDistance(
      pickup.latitude,
      pickup.longitude,
      dropoff.latitude,
      dropoff.longitude
    );
    
    return {
      distance,
      formattedAddresses: {
        pickup: pickup.formattedAddress,
        dropoff: dropoff.formattedAddress
      }
    };
  } catch (error) {
    console.error('Route calculation error:', error);
    return null;
  }
} 