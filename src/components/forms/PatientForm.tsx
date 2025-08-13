"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import CustomFormField  from "../ui/CustomFormField"
export enum FormFieldType {
  INPUT ='input',
  TEXTAREA='textarea',
  PHONE_INPUT ='phoneInput',
  CHECKBOX ='checkbox',
  DATE_PICKER ='datePicker',
  SELECT ='select',
  SKELETON ='skeleton'
}

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 const PatientForm = ()=>{
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  
}
return(
  <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
    <section className="mb-12 space-y-4 " >
    <h1 className="header text-white">Hi there 👋 </h1>
    <p className=" text-white">Schedule your first appointment.</p>
    </section>
    < CustomFormField 
    
        fieldType ={FormFieldType.INPUT}

        control={form.control}
        name="name"
        label="Full Name"
        placeholder="John Doe"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user">
    </CustomFormField>

    < CustomFormField 
    
        fieldType ={FormFieldType.INPUT}

        control={form.control}
        name="email"
        label="Email"
        placeholder="JohnDoe@gmail.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="user">
    </CustomFormField>

    < CustomFormField 
    
        fieldType ={FormFieldType.PHONE_INPUT}

        control={form.control}
        name="phone"
        label="Phone number"
        placeholder="(555) 123-4567"
        iconSrc="/assets/icons/phone.svg"
        iconAlt="user">
    </CustomFormField>
    
   
    <Button type="submit">Submit</Button>
  </form>
</Form>
)
}

export default PatientForm;