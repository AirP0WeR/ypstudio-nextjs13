'use client'

import toast, { Toaster } from "react-hot-toast";

export function BasicExample() {
    const notifySuccess = () => toast.success("Сообщение успешно отправлено!");
    notifySuccess();

}

export async function ToasterBasic() {
return (
    <Toaster
    position="top-center"
    reverseOrder={false}
  />
)
}

// export {
//   BasicExample,
//   ToasterBasic
// }