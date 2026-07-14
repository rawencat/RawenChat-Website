export type Locale = "es" | "en";

export const dictionary = {
  es: {
    nav: {
      features: "Features",
      showcase: "Showcase",
      download: "Descargar",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      badge: "App de escritorio · Twitch & Kick",
      titleBefore: "Tu chat de streaming,",
      titleAccent: "en un solo lugar",
      description:
        "RawenChat es la herramienta de escritorio para creadores en Twitch y Kick. Más interactividad en el stream, fácil de configurar, incluso para espectadores nuevos sin puntos de canal.",
      ctaDownload: "Descargar gratis",
      ctaFeatures: "Ver features",
      tags: ["Chat en vivo", "Text-to-Speech", "Comandos custom", "Avatar OBS"],
      imageAlt: "RawenChat — conectar canal de Twitch o Kick",
    },
    features: {
      label: "Features",
      title: "Todo lo que necesitas para interactuar con tu chat",
      subtitle:
        "Herramientas accesibles y fáciles de configurar para streamers en Twitch y Kick.",
      items: [
        {
          title: "Lector de Chat Multiplataforma",
          description:
            "Conexión directa en tiempo real con streams de Kick y Twitch. Visor de chat integrado en la interfaz de la app.",
        },
        {
          title: "Comandos Interactivos Universales",
          description:
            "Los espectadores ejecutan comandos en el chat para accionar teclas (macros) o reproducir sonidos. Ideal para fidelizar a usuarios nuevos sin puntos de canal.",
        },
        {
          title: "Control Anti-Spam (Timeouts)",
          description:
            "Sistema de timeout totalmente personalizable por usuario. Mantén el control y evita el abuso de los comandos en el stream.",
        },
        {
          title: "Avatar 2D (VTuber) Reactivo",
          description:
            "Sube tu avatar 2D con imagen Idle e Active. Reacciona automáticamente a la detección de sonido del micrófono.",
        },
        {
          title: "Sistema TTS Completo",
          description:
            "El bot lee el chat en voz alta con personalización total: idioma, tipo de voz y control de volumen independiente.",
        },
        {
          title: "Integración Instantánea con OBS",
          description:
            "Genera links de overlays listos para copiar y pegar como Browser Source en OBS. Sin configuraciones complejas.",
        },
        {
          title: "Chat Overlay 100% Custom",
          description:
            "El overlay del chat en pantalla es totalmente personalizable para que encaje con la identidad visual de tu stream.",
        },
      ],
    },
    showcase: {
      label: "Showcase",
      title: "Diseñado para el stream real",
      subtitle:
        "Cada sección de la app, pensada para que configures en minutos y dejes de pelearte con tools sueltas.",
      sections: [
        {
          id: "connect",
          image: "/showcase/start.png",
          tag: "Inicio",
          title: "Conecta Twitch o Kick en segundos",
          description:
            "Elige la plataforma, escribe el nombre de tu canal y listo. Chat en vivo, TTS, comandos y overlays de OBS desde un solo lugar.",
          bullets: [
            "Twitch y Kick nativos",
            "Sin setup complicado",
            "Listo para streamear",
          ],
        },
        {
          id: "chat",
          image: "/showcase/homechat.png",
          tag: "Chat en vivo",
          title: "Lector de chat multiplataforma",
          description:
            "Visor de chat en tiempo real integrado en la app. Copia el enlace del overlay para OBS y muéstralo en pantalla con un click.",
          bullets: [
            "Mensajes en tiempo real",
            "Overlay para OBS",
            "Copiar enlace al instante",
          ],
        },
        {
          id: "commands",
          image: "/showcase/commands.png",
          tag: "Comandos",
          title: "Comandos interactivos para todo el chat",
          description:
            "Macros y sonidos activados por comandos de chat. Perfecto para involucrar a espectadores nuevos sin requerir puntos de canal.",
          bullets: [
            "Macros de teclado",
            "Sonidos en stream",
            "Timeouts por usuario",
          ],
        },
        {
          id: "avatar",
          image: "/showcase/avatar.png",
          tag: "Avatar 2D",
          title: "Avatar VTuber reactivo al micrófono",
          description:
            "Sube imágenes Idle y Active. El avatar reacciona a tu voz con umbral y sensibilidad configurables. Overlay listo para OBS.",
          bullets: [
            "Estados Idle / Active",
            "Detección de micrófono",
            "Enlace para Browser Source",
          ],
        },
        {
          id: "tts",
          image: "/showcase/settings.png",
          tag: "TTS",
          title: "Text-to-Speech completo y personalizable",
          description:
            "El bot lee el chat en voz alta. Elige idioma, voz y volumen independiente. Ideal para no perderte mensajes mientras streameas.",
          bullets: [
            "Idioma y voz a tu gusto",
            "Volumen independiente",
            "Activa o desactiva al vuelo",
          ],
        },
        {
          id: "overlay",
          image: "/showcase/edit.png",
          tag: "Overlay",
          title: "Chat overlay 100% personalizable",
          description:
            "Edita el componente del overlay con vista previa en vivo. Adapta colores, layout y estilo a la marca de tu stream.",
          bullets: [
            "Editor visual + código",
            "Vista previa en tiempo real",
            "Identidad visual del streamer",
          ],
        },
      ],
    },
    values: [
      {
        title: "Sin puntos de canal",
        text: "Cualquier espectador puede interactuar con comandos desde el día uno.",
      },
      {
        title: "Setup simple",
        text: "Conecta el canal, copia el overlay y pégalo en OBS como Browser Source.",
      },
      {
        title: "Twitch + Kick",
        text: "Una sola app para ambas plataformas. Menos pestañas, más control.",
      },
    ],
    download: {
      titleBefore: "Lleva",
      titleAfter: "a tu stream",
      description:
        "Descarga la app de escritorio y empieza a dar interactividad real a tu chat en Twitch o Kick.",
      ctaWindows: "Descargar para Windows",
      ctaShowcase: "Ver capturas",
      note: "App de escritorio · Fácil de configurar · Compatible con OBS",
    },
    downloadModal: {
      title: "¡Gracias por descargar!",
      subtitle: "Tu descarga de RawenChat está lista.",
      size: "Tamaño",
      downloadNow: "Descargar ahora",
      cancel: "Cancelar",
    },
    footer: {
      features: "Features",
      showcase: "Showcase",
      download: "Descargar",
      rights: "Para streamers en Twitch y Kick.",
    },
  },
  en: {
    nav: {
      features: "Features",
      showcase: "Showcase",
      download: "Download",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Desktop app · Twitch & Kick",
      titleBefore: "Your streaming chat,",
      titleAccent: "all in one place",
      description:
        "RawenChat is the desktop tool for creators on Twitch and Kick. More stream interactivity, easy to set up — even for new viewers without channel points.",
      ctaDownload: "Download free",
      ctaFeatures: "See features",
      tags: ["Live chat", "Text-to-Speech", "Custom commands", "OBS Avatar"],
      imageAlt: "RawenChat — connect your Twitch or Kick channel",
    },
    features: {
      label: "Features",
      title: "Everything you need to engage your chat",
      subtitle:
        "Accessible tools that are easy to set up for streamers on Twitch and Kick.",
      items: [
        {
          title: "Multiplatform Chat Reader",
          description:
            "Real-time connection to Kick and Twitch streams. Built-in chat viewer right in the app interface.",
        },
        {
          title: "Universal Interactive Commands",
          description:
            "Viewers run chat commands to trigger key macros or play sounds on stream — perfect for engaging new users without channel points.",
        },
        {
          title: "Anti-Spam Control (Timeouts)",
          description:
            "Fully customizable per-user timeout system. Stay in control and prevent command abuse.",
        },
        {
          title: "Reactive 2D Avatar (VTuber)",
          description:
            "Upload a 2D avatar with Idle and Active images. It reacts automatically to your microphone sound detection.",
        },
        {
          title: "Full TTS System",
          description:
            "The bot reads chat out loud with full control: language, voice type, and independent volume.",
        },
        {
          title: "Instant OBS Integration",
          description:
            "Generate overlay links ready to paste as a Browser Source in OBS. No complex setup required.",
        },
        {
          title: "100% Custom Chat Overlay",
          description:
            "The on-screen chat overlay is fully customizable to match your stream’s visual identity.",
        },
      ],
    },
    showcase: {
      label: "Showcase",
      title: "Built for real streams",
      subtitle:
        "Every section of the app is designed so you set up in minutes — no more juggling separate tools.",
      sections: [
        {
          id: "connect",
          image: "/showcase/start.png",
          tag: "Start",
          title: "Connect Twitch or Kick in seconds",
          description:
            "Pick your platform, enter your channel name, and you’re set. Live chat, TTS, commands, and OBS overlays in one place.",
          bullets: [
            "Native Twitch & Kick",
            "No complicated setup",
            "Ready to stream",
          ],
        },
        {
          id: "chat",
          image: "/showcase/homechat.png",
          tag: "Live chat",
          title: "Multiplatform chat reader",
          description:
            "Real-time chat viewer built into the app. Copy the OBS overlay link and put it on screen in one click.",
          bullets: [
            "Real-time messages",
            "OBS overlay",
            "Copy link instantly",
          ],
        },
        {
          id: "commands",
          image: "/showcase/commands.png",
          tag: "Commands",
          title: "Interactive commands for the whole chat",
          description:
            "Macros and sounds triggered by chat commands. Perfect for engaging new viewers without channel points.",
          bullets: [
            "Keyboard macros",
            "On-stream sounds",
            "Per-user timeouts",
          ],
        },
        {
          id: "avatar",
          image: "/showcase/avatar.png",
          tag: "2D Avatar",
          title: "Mic-reactive VTuber avatar",
          description:
            "Upload Idle and Active images. The avatar reacts to your voice with configurable threshold and sensitivity. OBS-ready overlay.",
          bullets: [
            "Idle / Active states",
            "Mic detection",
            "Browser Source link",
          ],
        },
        {
          id: "tts",
          image: "/showcase/settings.png",
          tag: "TTS",
          title: "Full, customizable Text-to-Speech",
          description:
            "The bot reads chat out loud. Pick language, voice, and independent volume — never miss a message while streaming.",
          bullets: [
            "Language & voice",
            "Independent volume",
            "Toggle on the fly",
          ],
        },
        {
          id: "overlay",
          image: "/showcase/edit.png",
          tag: "Overlay",
          title: "100% customizable chat overlay",
          description:
            "Edit the overlay component with live preview. Match colors, layout, and style to your stream brand.",
          bullets: [
            "Visual + code editor",
            "Live preview",
            "Streamer visual identity",
          ],
        },
      ],
    },
    values: [
      {
        title: "No channel points needed",
        text: "Any viewer can interact with commands from day one.",
      },
      {
        title: "Simple setup",
        text: "Connect your channel, copy the overlay, paste it in OBS as a Browser Source.",
      },
      {
        title: "Twitch + Kick",
        text: "One app for both platforms. Fewer tabs, more control.",
      },
    ],
    download: {
      titleBefore: "Bring",
      titleAfter: "to your stream",
      description:
        "Download the desktop app and start giving real interactivity to your Twitch or Kick chat.",
      ctaWindows: "Download for Windows",
      ctaShowcase: "View screenshots",
      note: "Desktop app · Easy setup · OBS compatible",
    },
    downloadModal: {
      title: "Thanks for downloading!",
      subtitle: "Your RawenChat download is ready.",
      size: "Size",
      downloadNow: "Download now",
      cancel: "Cancel",
    },
    footer: {
      features: "Features",
      showcase: "Showcase",
      download: "Download",
      rights: "For streamers on Twitch and Kick.",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)["es"];
