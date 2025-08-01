
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Briefcase, ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function SiteFooter() {
    return (
        <footer className="bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="flex flex-col gap-4 md:col-span-2">
                <Link href="/" className="flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <h1 className="text-lg font-bold">Job Portal</h1>
                </Link>
                <p className="text-sm text-muted-foreground pr-8">Connecting local talent with local opportunities. Your next career move is just a click away.</p>
            </div>
             <div className="flex flex-col gap-3">
                 <h4 className="font-semibold">For Job Seekers</h4>
                 <Link href="/jobs" className="text-sm text-muted-foreground hover:text-foreground">Browse Jobs</Link>
                 <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Login</Link>
                 <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground">Register</Link>
             </div>
             <div className="flex flex-col gap-3">
                 <h4 className="font-semibold">For Companies</h4>
                 <Link href="/company/post-job" className="text-sm text-muted-foreground hover:text-foreground">Post a Job</Link>
                 <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
                 <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Login</Link>
             </div>
             <div className="flex flex-col gap-3">
                 <h4 className="font-semibold">Resources</h4>
                 <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
                 <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                 <Link href="/feedback" className="text-sm text-muted-foreground hover:text-foreground">Feedback</Link>
             </div>
          </div>
           <div className="grid md:grid-cols-5 gap-8 mt-8">
                <div className="md:col-span-2">
                     <h4 className="font-semibold">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground mt-2 mb-4">Subscribe to our newsletter to get the latest job postings and news.</p>
                    <form className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Enter your email" />
                        <Button type="submit">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Job Portal. All Rights Reserved.</p>
             <div className="flex items-center gap-4">
                 <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
                 <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
             </div>
          </div>
        </div>
      </footer>
    )
}
