'use client';
// ES/EN/PT strings for /llamada (the team's Approve / Decline page). Spanish by
// default; the header pills (shared with the blog and home, LANG_KEY in
// localStorage) switch it on the client.
import { useLang } from '@/components/blog/BlogLang';

export const LL = {
  en: {
    title: 'Call request', name: 'Name', email: 'Email', phone: 'Phone / WhatsApp', language: 'Language',
    langs: { es: 'Spanish', en: 'English', pt: 'Portuguese' },
    invalid: 'This link isn’t valid. Open it again from the email.',
    expired: (v) => `This request is older than 14 days, so the link has expired. Reply to ${v.who} directly${v.email ? ` at ${v.email}` : ''}.`,
    them: 'them',
    declined: (v) => `Declined. Nothing was sent to ${v.who}.`,
    approvedSent: (v) => `Approved — the booking link was sent to ${v.who} (${v.to}).`,
    approvedNoEmail: (v) => `Approved. ${v.who} left no email — send the booking link on WhatsApp:`,
    alsoWa: 'Also send it on WhatsApp', sendWa: 'Send on WhatsApp',
    askApprove: (v) => `Send ${v.who} the link to book a 30-minute call`,
    at: 'at', noEmail: ' (no email — you’ll get a WhatsApp link)',
    askDecline: (v) => `Decline ${v.who}’s request? Nothing will be sent to them.`,
    working: 'Working…', confirmSend: 'Confirm: send the booking link', confirmDecline: 'Confirm decline',
    errExpired: 'This link has expired (14 days).', errInvalid: 'This link isn’t valid.',
    errBooking: 'The booking link isn’t set on the site (NEXT_PUBLIC_BOOKING_URL).', errGeneric: 'Something went wrong. Try again.',
  },
  es: {
    title: 'Solicitud de llamada', name: 'Nombre', email: 'Email', phone: 'Teléfono / WhatsApp', language: 'Idioma',
    langs: { es: 'Español', en: 'Inglés', pt: 'Portugués' },
    invalid: 'Este enlace no es válido. Abrilo de nuevo desde el email.',
    expired: (v) => `Esta solicitud tiene más de 14 días, así que el enlace venció. Respondé a ${v.who} directamente${v.email ? ` en ${v.email}` : ''}.`,
    them: 'esta persona',
    declined: (v) => `Rechazada. No se envió nada a ${v.who}.`,
    approvedSent: (v) => `Aprobada: el enlace para agendar se envió a ${v.who} (${v.to}).`,
    approvedNoEmail: (v) => `Aprobada. ${v.who} no dejó email: enviá el enlace para agendar por WhatsApp:`,
    alsoWa: 'Enviarlo también por WhatsApp', sendWa: 'Enviar por WhatsApp',
    askApprove: (v) => `¿Enviar a ${v.who} el enlace para agendar una llamada de 30 minutos`,
    at: 'a', noEmail: ' (sin email: vas a recibir un enlace de WhatsApp)',
    askDecline: (v) => `¿Rechazar la solicitud de ${v.who}? No se le va a enviar nada.`,
    working: 'Procesando…', confirmSend: 'Confirmar: enviar el enlace para agendar', confirmDecline: 'Confirmar rechazo',
    errExpired: 'Este enlace venció (14 días).', errInvalid: 'Este enlace no es válido.',
    errBooking: 'El enlace para agendar no está configurado en el sitio (NEXT_PUBLIC_BOOKING_URL).', errGeneric: 'Algo salió mal. Probá de nuevo.',
  },
  pt: {
    title: 'Pedido de chamada', name: 'Nome', email: 'Email', phone: 'Telefone / WhatsApp', language: 'Idioma',
    langs: { es: 'Espanhol', en: 'Inglês', pt: 'Português' },
    invalid: 'Este link não é válido. Abra-o novamente pelo email.',
    expired: (v) => `Este pedido tem mais de 14 dias, então o link expirou. Responda a ${v.who} diretamente${v.email ? ` em ${v.email}` : ''}.`,
    them: 'essa pessoa',
    declined: (v) => `Recusado. Nada foi enviado a ${v.who}.`,
    approvedSent: (v) => `Aprovado: o link para agendar foi enviado a ${v.who} (${v.to}).`,
    approvedNoEmail: (v) => `Aprovado. ${v.who} não deixou email: envie o link para agendar pelo WhatsApp:`,
    alsoWa: 'Enviar também pelo WhatsApp', sendWa: 'Enviar pelo WhatsApp',
    askApprove: (v) => `Enviar a ${v.who} o link para agendar uma chamada de 30 minutos`,
    at: 'para', noEmail: ' (sem email: você vai receber um link do WhatsApp)',
    askDecline: (v) => `Recusar o pedido de ${v.who}? Nada será enviado.`,
    working: 'Processando…', confirmSend: 'Confirmar: enviar o link para agendar', confirmDecline: 'Confirmar recusa',
    errExpired: 'Este link expirou (14 dias).', errInvalid: 'Este link não é válido.',
    errBooking: 'O link para agendar não está configurado no site (NEXT_PUBLIC_BOOKING_URL).', errGeneric: 'Algo deu errado. Tente novamente.',
  },
};

// Spanish by default like every hub page; the reader's saved choice applies after hydration.
export function useLL() {
  const { lang } = useLang();
  return { d: LL[lang] || LL.es, lang };
}

export function Lx({ k, v }) {
  const { d } = useLL();
  const e = d[k] ?? LL.en[k];
  return <>{typeof e === 'function' ? e(v || {}) : e}</>;
}

export function LangName({ code }) {
  const { d } = useLL();
  return <>{d.langs[code] || code}</>;
}
