export function SiteFooter() {
    return (
        <footer className="py-6 md:px-8  max-w-7xl md:py-0 mx-auto">
            <div className="flex items-center justify-around gap-4 md:h-24 md:flex-row flex-col-reverse">

                <a className="underline underline-offset-4 font-medium" href="http://artschur.github.io/website/index.html" target="_blank" rel="noreferrer">
                    construido com ❤️ por arthur schurhaus</a>
                <a
                    href="https://www.instagram.com/revisacardd/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                >
                    Instagram
                </a>
                <a
                    href="https://www.tiktok.com/@revisaenemcards"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                >
                    TikTok
                </a>

            </div>
        </footer >
    )
}