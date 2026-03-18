import { Injectable } from '@angular/core';

export interface CotizacionData {
  nombreCompleto: string;
  celular: string;
  correo: string;
  motivoCotizacion: string;
  autorizaDatos: boolean;
}

export interface EnvioResult {
  success: boolean;
  message?: string;
}

/** Webhook Google Apps Script. Formato: application/x-www-form-urlencoded. El script debe leer e.parameter.nombre, e.parameter.celular, etc. */
const WEBHOOK_URL =
  'https://script.google.com/a/macros/segurosbolivar.com/s/AKfycbyJFx_qFdINGyO49laEi-VdZPHbXQeIKaOyL6xlGi06WNKZ7kB5urqtMrAuSmrKC7r6/exec';

@Injectable({ providedIn: 'root' })
export class DiagnosticoService {
  async enviarCotizacion(data: CotizacionData): Promise<EnvioResult> {
    const formData = new URLSearchParams();
    formData.append('nombre', data.nombreCompleto);
    formData.append('celular', data.celular);
    formData.append('email', data.correo);
    formData.append('motivo', data.motivoCotizacion);
    formData.append('autorizacion', data.autorizaDatos.toString());

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    return { success: true };
  }
}
