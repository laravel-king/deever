import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

const page = () => {
  return(
      <section className="flex-grow p-6 space-y-6">
          <Card className="w-full max-w-lg mx-auto shadow-lg rounded-lg">
              <CardHeader className="mb-4">
                  <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 rounded-full border-2 border-slate-400">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                          <CardTitle className="text-lg font-semibold text-slate-700">Edit Profile</CardTitle>
                          <CardDescription className="text-sm text-slate-500">Update your profile details</CardDescription>
                      </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-2">
                      <Label className="text-sm text-slate-600" htmlFor="name">
                          Name
                      </Label>
                      <Input className="w-full bg-white appearance-none shadow-none px-4 dark:bg-slate-950 focus:outline-none focus:ring-transparent focus:border-green-400" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                      <Label className="text-sm text-slate-600" htmlFor="email">
                          Email
                      </Label>
                      <Input
                          className="w-full bg-white appearance-none shadow-none px-4 dark:bg-slate-950 focus:outline-none focus:ring-transparent focus:border-green-400"
                          id="email"
                          placeholder="Enter your email"
                          type="email"
                      />
                  </div>
                  <div className="space-y-2">
                      <Label className="text-sm text-slate-600" htmlFor="bio">
                          Bio
                      </Label>
                      <Textarea
                          rows={4}
                          className="w-full bg-white appearance-none shadow-none px-4 dark:bg-slate-950 focus:outline-none focus:ring-transparent focus:border-green-400 resize-none"
                          id="bio"
                          placeholder="Tell us about yourself"
                      />
                  </div>
                  <div className="mt-4">
                      <Label className="text-sm text-slate-600">Profile Completion</Label>
                      <div className="w-full h-4 bg-slate-300 rounded-md">
                          <div
                              className="h-full bg-indigo-600 rounded-md"
                              style={{
                                  width: "80%",
                              }}
                          />
                      </div>
                  </div>
              </CardContent>
              <CardFooter className="mt-4">
                  <Button className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">
                      Save Changes
                  </Button>
              </CardFooter>
          </Card>
      </section>
  )
}
export default page;