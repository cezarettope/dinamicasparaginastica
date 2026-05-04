import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-primary-foreground">Voltar</Link>
      </div>
    </div>
  );
}

const utmifyPixel = `window.pixelId = "69e51c538db893589cd33b2d";var a = document.createElement("script");a.setAttribute("async", "");a.setAttribute("defer", "");a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");document.head.appendChild(a);`;

const fbPixel = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1450652386098795');fbq('track','PageView');`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "+250 Dinâmicas de Ginástica Artística e Rítmica" },
      { name: "description", content: "Acesso imediato a +250 dinâmicas interativas de ginástica artística e rítmica prontas para aplicar em aula." },
      { property: "og:title", content: "+250 Dinâmicas de Ginástica Artística e Rítmica" },
      { name: "twitter:title", content: "+250 Dinâmicas de Ginástica Artística e Rítmica" },
      { property: "og:description", content: "Acesso imediato a +250 dinâmicas interativas de ginástica artística e rítmica prontas para aplicar em aula." },
      { name: "twitter:description", content: "Acesso imediato a +250 dinâmicas interativas de ginástica artística e rítmica prontas para aplicar em aula." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8626c733-45c3-418b-a57a-8dfd7f5ef057/id-preview-e19af141--fe8e2a33-67e8-4b3f-8080-5ea9234d0a06.lovable.app-1777867140655.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8626c733-45c3-418b-a57a-8dfd7f5ef057/id-preview-e19af141--fe8e2a33-67e8-4b3f-8080-5ea9234d0a06.lovable.app-1777867140655.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap" }],
    scripts: [
      { src: "https://cdn.utmify.com.br/scripts/utms/latest.js", async: true, defer: true, "data-utmify-prevent-xcod-sck": "", "data-utmify-prevent-subids": "" } as any,
      { children: utmifyPixel },
      { children: fbPixel },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>
        {children}
        <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1450652386098795&ev=PageView&noscript=1" alt="" /></noscript>
        <Scripts />
      </body>
    </html>
  );
}
