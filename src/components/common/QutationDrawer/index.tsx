"use client";
import { CButton } from "@/components/animated/MovingBorders";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { onSubmit } from "@/functions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// 🛑 Zod Schema for Validation
const formSchema = z
  .object({
    fullName: z.string().min(3, "Full Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    pinCode: z.string().regex(/^\d{6}$/, "Pin Code must be exactly 6 digits"), // Pin Code validation
    floors: z.string().min(1, "Please select the number of floors"),
    otherFloor: z.string().optional(),
    message: z.string().min(5, "Message must be at least 5 characters long"),
  })
  .refine(
    (data) => {
      if (data.floors === "other" && !data.otherFloor) {
        return false;
      }
      return true;
    },
    { message: "Specify the other floor", path: ["otherFloor"] }
  );

export default function QuotationDrawer({
  triggerText,
}: {
  triggerText?: string;
}) {
  const [open, setOpen] = useState(false);
  const [floorType, setFloorType] = useState("");

  // 🛑 React Hook Form Setup
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const floors = watch("floors");


  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="bg-golden-400 hover:bg-golden-400/90">
            {triggerText || "Get your quotation"}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 flex flex-col items-center justify-center bg-black/20 min-h-screen">
          <DrawerHeader>
            <DrawerTitle className="text-center text-xl font-semibold">
              Construction Inquiry
            </DrawerTitle>
          </DrawerHeader>

          <div className="flex justify-center items-center w-full">
            <CButton
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                backgroundColor: "#131415",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
              className="md:w-[38rem] md:h-[38rem] w-full flex flex-col items-center justify-center p-6"
            >
              <form
                className="w-full flex flex-col space-y-4"
                onSubmit={handleSubmit((data) => onSubmit(data, setOpen))}
              >
                {/* Form Fields */}
                <div className="flex flex-col space-y-3">
                  {/* Full Name */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Label className="md:w-1/3 text-white">Full Name</Label>
                    <Input
                      placeholder="Enter your full name"
                      {...register("fullName")}
                      className="w-full"
                    />
                  </div>
                  <p className="text-red-500 text-sm">{errors.fullName?.message?.toString()}</p>

                  {/* Email */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Label className="md:w-1/3 text-white">Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email")}
                      className="w-full"
                    />
                  </div>
                  <p className="text-red-500 text-sm">{errors.email?.message?.toString()}</p>

                  {/* Phone Number */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Label className="md:w-1/3 text-white">Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      {...register("phone")}
                      className="w-full"
                    />
                  </div>
                  <p className="text-red-500 text-sm">{errors.phone?.message?.toString()}</p>

                  {/* Pin Code */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Label className="md:w-1/3 text-white">Pin Code</Label>
                    <Input
                      type="text"
                      placeholder="Enter your pin code"
                      {...register("pinCode")}
                      className="w-full"
                    />
                  </div>
                  <p className="text-red-500 text-sm">{errors.pinCode?.message?.toString()}</p>

                  {/* Floors */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Label className="md:w-1/3 text-white">Number of Floors</Label>
                    <Select
                      onValueChange={(value) => {
                        setValue("floors", value);
                        setFloorType(value);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select floors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="G+1">G+1</SelectItem>
                        <SelectItem value="G+2">G+2</SelectItem>
                        <SelectItem value="G+3">G+3</SelectItem>
                        <SelectItem value="G+4">G+4</SelectItem>
                        <SelectItem value="G+5">G+5</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {floors === "other" && (
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                      <Label className="md:w-1/3 text-white">Specify Floors</Label>
                      <Input placeholder="Specify floors" {...register("otherFloor")} className="w-full" />
                    </div>
                  )}
                  <p className="text-red-500 text-sm">{errors.otherFloor?.message?.toString()}</p>

                  {/* Message */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Label className="md:w-1/3 text-white">Message</Label>
                    <Textarea placeholder="Your message" rows={3} {...register("message")} className="w-full" />
                  </div>
                  <p className="text-red-500 text-sm">{errors.message?.message?.toString()}</p>
                </div>

                {/* Submit and Cancel Buttons */}
                <DrawerFooter className="flex flex-row gap-2 mt-4">
                  <Button type="submit" className="bg-golden-400/90 flex-1 hover:bg-golden-400">
                    Submit
                  </Button>
                  <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
                    Cancel
                  </Button>
                </DrawerFooter>
              </form>
            </CButton>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
