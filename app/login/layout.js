import AppLogo from "@/components/AppLogo";

export default function LoginLayout({
                                            children, // will be a page or nested layout
                                        }) {
    return (
        <section className="flex justify-center flex-col items-center">
            {/* Include shared UI here e.g. a header or sidebar */}
            <AppLogo />

            {children}
        </section>
    )
}