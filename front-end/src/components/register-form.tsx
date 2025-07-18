import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-6 mb-10">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Your username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
            </div> 
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="6901234567"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Tax Number</Label>
                <Input
                  id="taxNumber"
                  type="text"
                  placeholder="123456789"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Full Address</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="123 Main St, City, Country"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Zip Code</Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="12345"
                  required
                />
              </div>
              </div>
              
            </div>
            <Button type="submit" className="w-full">
              Register 
            </Button> 
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Log in here
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
