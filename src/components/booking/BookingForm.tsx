import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { VehicleType, Vehicle } from '@/types/booking';
import { useToast } from '@/hooks/use-toast';

// Form schema validation
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  passportNumber: z.string().min(5, {
    message: 'Passport number must be at least 5 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z.string().min(7, {
    message: 'Please enter a valid phone number.',
  }),
  numAdults: z.coerce.number().min(1, {
    message: 'At least 1 adult is required.',
  }),
  numChildren: z.coerce.number().min(0),
  pickupType: z.enum(['airport', 'trainStation', 'custom']),
  pickupLocation: z.string().min(3, {
    message: 'Please enter a valid pickup location.',
  }),
  dropoffLocation: z.string().min(3, {
    message: 'Please enter a valid destination.',
  }),
  pickupDate: z.date({
    required_error: 'Please select a date.',
  }),
  pickupTime: z.string().min(5, {
    message: 'Please select a time.',
  }),
  specialRequests: z.string().optional(),
});

interface BookingFormProps {
  vehicleType: VehicleType;
  vehicle: Vehicle;
}

const BookingForm: React.FC<BookingFormProps> = ({ vehicleType, vehicle }) => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      passportNumber: '',
      email: '',
      phoneNumber: '',
      numAdults: 1,
      numChildren: 0,
      pickupType: 'custom',
      pickupLocation: '',
      dropoffLocation: '',
      pickupTime: '',
      specialRequests: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Submit the form data to your backend
    console.log(values);
    
    toast({
      title: "Booking Received!",
      description: "Your booking request has been successfully submitted. We'll contact you shortly to confirm the details.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-muted/50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-3">Selected Vehicle</h2>
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
              <img 
                src={vehicle.imageUrl} 
                alt={vehicle.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{vehicle.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">Max {vehicle.maxPassengers} passengers</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{vehicle.pricePerKm.toFixed(2)} €/km</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{vehicleType === 'car' ? 'Sedan' : 'Van'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="passportNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passport/ID Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Passport or ID number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+352 123 456 789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="numAdults"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Adults</FormLabel>
                    <FormControl>
                      <Input type="number" min={1} max={vehicle.maxPassengers} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="numChildren"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Children</FormLabel>
                    <FormControl>
                      <Input type="number" min={0} max={vehicle.maxPassengers - 1} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Trip Details</h2>
            
            <FormField
              control={form.control}
              name="pickupType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pickup type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="trainStation">Train Station</SelectItem>
                      <SelectItem value="custom">Custom Address</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {form.watch('pickupType') === 'airport' 
                      ? 'Airport & Flight Number' 
                      : form.watch('pickupType') === 'trainStation' 
                        ? 'Train Station & Train Number' 
                        : 'Pickup Address'}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={
                      form.watch('pickupType') === 'airport' 
                        ? 'e.g., Luxembourg Airport, LX123' 
                        : form.watch('pickupType') === 'trainStation' 
                          ? 'e.g., Luxembourg Central, Train #456' 
                          : 'e.g., 10 Avenue de la Liberté, Luxembourg'
                    } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="dropoffLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g., 25 Boulevard Royal, Luxembourg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pickupDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Pickup Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="pickupTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requests (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Child seats, extra luggage, etc."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg space-y-2">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Free cancellation up to 24 hours before your pickup time.</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Fixed price - no hidden costs or surge pricing.</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Professional, multilingual drivers.</p>
          </div>
        </div>
        
        <Button type="submit" className="w-full md:w-auto md:min-w-[200px]">
          Complete Booking
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;