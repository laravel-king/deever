import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AppLogo from "@/components/AppLogo";
const Page = () =>{
    return (
        <>
            <main className="flex justify-center py-8">
                <Card className="max-w-md w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">
                            <h1>Login Page</h1>
                        </CardTitle>
                        <CardDescription className="text-center">
                            Please enter your username and password to login or use your social media account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" placeholder="Enter your username" required type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="Enter your password" required type="password" />
                        </div>
                        <div className="flex justify-around mt-4">
                            <Button className="bg-blue-500 hover:bg-blue-600 flex items-center space-x-2">
                                <FacebookIcon className="w-4 h-4" />
                                <span>Facebook</span>
                            </Button>
                            <Button className="bg-sky-500 hover:bg-sky-600 flex items-center space-x-2">
                                <TwitterIcon className="w-4 h-4" />
                                <span>Twitter</span>
                            </Button>
                            <Button className="bg-red-500 hover:bg-red-600 flex items-center space-x-2">
                                <ChromeIcon className="w-4 h-4" />
                                <span>Google</span>
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-between">
                        <Link className="text-sm text-gray-600 hover:underline" href="#">
                            Forgot Password?
                        </Link>
                        <Button className="w-1/2 bg-indigo-600 hover:bg-indigo-500">Login</Button>
                    </CardFooter>
                </Card>
            </main>
            <footer className="flex justify-center py-8">
                <Link className="text-sm text-gray-600 hover:underline" href="#">
                    Click Here to register for free
                </Link>

            </footer>
        </>
    )
}

function ChromeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}


function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function PlaneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
    )
}


function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}

export default Page;