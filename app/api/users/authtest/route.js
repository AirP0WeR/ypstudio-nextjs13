import { authUserTest } from '../../../../controllers/userController'
import { NextResponse } from 'next/server';

// export default function handler (req, res) {
//     if (req.method === "POST") {
//         authUserTest (req, res);
//     } else {
//         res.status(200).json({ message: "Не верный запрос"})
//     }
// }


export async function POST(request) {
    const res = await request.json()

    console.log(res.name + res.email + request.password);

    return NextResponse.json({ res });
}

export function GET() {

    return NextResponse.json({ message: "Не верный запрос GET"})
}