import { Lift } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";


  // 🛑 Submit Handler (Using FormSubmit)
  export const onSubmit = async (data: any, setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      await axios.post(
        "https://formsubmit.co/being.ashutosh16.20@gmail.com",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("Email sent successfully!");
      setOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

 export const handleClickForLearnMore = (lift: Lift, router: ReturnType<typeof useRouter>)=>{
    router.push(`/products/${lift.name.toLowerCase()}`)
}
