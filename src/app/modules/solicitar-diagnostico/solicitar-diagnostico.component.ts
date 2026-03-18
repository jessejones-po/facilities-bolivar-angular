import { Component, signal, inject, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiagnosticoService, type CotizacionData } from '../../core/services/diagnostico.service';
import { COTIZACION_FORM, MOTIVO_OPCIONES } from './solicitar-diagnostico.constants';

@Component({
  selector: 'app-solicitar-diagnostico',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
        <div class="flex flex-col gap-6">
          <a
            [routerLink]="['/']"
            class="inline-flex items-center gap-2 text-[#009250] font-light text-sm hover:underline w-fit"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {{ formConfig.back }}
          </a>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#000000] leading-tight">
            {{ formConfig.title }}
          </h1>
        </div>

        <div class="w-full">
          @if (enviadoExito()) {
            <div
              class="rounded-2xl bg-[#efefef] p-8 shadow-sm border border-[#009250]/20 text-center"
            >
              <p class="text-[#009250] font-normal text-lg mb-6">{{ formConfig.successMessage }}</p>
              <a
                [routerLink]="['/']"
                class="inline-flex items-center justify-center bg-[#ffdf58] text-[#009250] font-bold text-sm px-8 py-3 rounded-full hover:brightness-95 transition-all"
              >
                {{ formConfig.back }}
              </a>
            </div>
          } @else {
            <div class="rounded-2xl bg-[#efefef] p-6 sm:p-8 shadow-sm">
              <p class="text-[#000000] font-light text-sm mb-6">{{ formConfig.cardIntro }}</p>

              @if (errorMessage()) {
                <div
                  class="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center justify-between gap-4"
                >
                  <p class="text-red-700 text-sm font-light">{{ errorMessage() }}</p>
                  <button
                    type="button"
                    (click)="clearError()"
                    class="shrink-0 text-red-600 hover:text-red-800 text-xs font-medium"
                  >
                    Reintentar
                  </button>
                </div>
              }

              <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
                <div>
                  <label class="block text-[#000000] font-normal text-sm mb-2">
                    {{ formConfig.fields.nombreCompleto.label }}*
                  </label>
                  <input
                    formControlName="nombreCompleto"
                    type="text"
                    [placeholder]="formConfig.fields.nombreCompleto.placeholder"
                    class="w-full px-4 py-3 rounded-lg border bg-white text-[#000000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009250]/50 transition-colors"
                    [class.border-gray-300]="!nombreCompletoInvalid()"
                    [class.border-red-400]="nombreCompletoInvalid()"
                  />
                  @if (nombreCompletoInvalid()) {
                    <p class="mt-1 text-red-600 text-xs">Ingrese su nombre completo</p>
                  }
                </div>

                <div>
                  <label class="block text-[#000000] font-normal text-sm mb-2">
                    {{ formConfig.fields.celular.label }}*
                  </label>
                  <input
                    formControlName="celular"
                    type="tel"
                    [placeholder]="formConfig.fields.celular.placeholder"
                    class="w-full px-4 py-3 rounded-lg border bg-white text-[#000000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009250]/50 transition-colors"
                    [class.border-gray-300]="!celularInvalid()"
                    [class.border-red-400]="celularInvalid()"
                  />
                  @if (celularInvalid()) {
                    <p class="mt-1 text-red-600 text-xs">Ingrese su celular</p>
                  }
                </div>

                <div>
                  <label class="block text-[#000000] font-normal text-sm mb-2">
                    {{ formConfig.fields.correo.label }}*
                  </label>
                  <input
                    formControlName="correo"
                    type="email"
                    [placeholder]="formConfig.fields.correo.placeholder"
                    class="w-full px-4 py-3 rounded-lg border bg-white text-[#000000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009250]/50 transition-colors"
                    [class.border-gray-300]="!correoInvalid()"
                    [class.border-red-400]="correoInvalid()"
                  />
                  @if (correoInvalid()) {
                    <p class="mt-1 text-red-600 text-xs">Ingrese su correo electrónico</p>
                  }
                </div>

                <div>
                  <label class="block text-[#000000] font-normal text-sm mb-2">
                    {{ formConfig.fields.motivo.label }}*
                  </label>
                  <select
                    formControlName="motivoCotizacion"
                    class="w-full px-4 py-3 rounded-lg border bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#009250]/50 transition-colors"
                    [class.border-gray-300]="!motivoInvalid()"
                    [class.border-red-400]="motivoInvalid()"
                  >
                    @for (opt of motivoOpciones; track opt.value) {
                      <option [value]="opt.value">{{ opt.label }}</option>
                    }
                  </select>
                  @if (motivoInvalid()) {
                    <p class="mt-1 text-red-600 text-xs">Seleccione una opción</p>
                  }
                </div>

                <div class="flex items-start gap-3">
                  <input
                    formControlName="autorizaDatos"
                    type="checkbox"
                    id="autorizaDatos"
                    class="mt-1 w-5 h-5 rounded border-gray-300 text-[#009250] focus:ring-[#009250] shrink-0"
                  />
                  <label for="autorizaDatos" class="text-[#000000] font-light text-sm">
                    {{ formConfig.checkbox.prefix }}
                    <a
                      [href]="formConfig.checkbox.linkHref"
                      class="text-[#009250] hover:underline"
                    >
                      {{ formConfig.checkbox.link }}
                    </a>
                  </label>
                </div>
                @if (autorizaInvalid()) {
                  <p class="text-red-600 text-xs -mt-2">Debe autorizar el uso de sus datos</p>
                }

                <button
                  type="submit"
                  [disabled]="!form.valid || enviando()"
                  class="w-full py-3 rounded-full bg-[#ffdf58] text-[#009250] font-bold text-base hover:brightness-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  @if (enviando()) {
                    <svg
                      class="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      />
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  } @else {
                    {{ formConfig.submit }}
                  }
                </button>
              </form>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class SolicitarDiagnosticoComponent {
  readonly formConfig = COTIZACION_FORM;
  readonly motivoOpciones = MOTIVO_OPCIONES;

  private readonly fb = inject(FormBuilder);
  private readonly diagnosticoService = inject(DiagnosticoService);

  readonly enviando = signal(false);
  readonly enviadoExito = signal(false);
  readonly errorMessage = signal<string | null>(null);

  form = this.fb.group({
    nombreCompleto: ['', Validators.required],
    celular: ['', Validators.required],
    correo: ['', Validators.required],
    motivoCotizacion: [''],
    autorizaDatos: [false, Validators.requiredTrue],
  });

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      console.log('Formulario válido:', this.form.valid);
    });
  }

  nombreCompletoInvalid = computed(
    () =>
      (this.form.get('nombreCompleto')?.touched || this.form.get('nombreCompleto')?.dirty) &&
      this.form.get('nombreCompleto')?.invalid
  );
  celularInvalid = computed(
    () =>
      (this.form.get('celular')?.touched || this.form.get('celular')?.dirty) &&
      this.form.get('celular')?.invalid
  );
  correoInvalid = computed(
    () =>
      (this.form.get('correo')?.touched || this.form.get('correo')?.dirty) &&
      this.form.get('correo')?.invalid
  );
  motivoInvalid = computed(
    () =>
      (this.form.get('motivoCotizacion')?.touched || this.form.get('motivoCotizacion')?.dirty) &&
      this.form.get('motivoCotizacion')?.invalid
  );
  autorizaInvalid = computed(
    () =>
      (this.form.get('autorizaDatos')?.touched || this.form.get('autorizaDatos')?.dirty) &&
      this.form.get('autorizaDatos')?.invalid
  );

  clearError(): void {
    this.errorMessage.set(null);
  }

  async onSubmit(): Promise<void> {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.errorMessage.set(null);
    const data: CotizacionData = {
      nombreCompleto: (this.form.value.nombreCompleto ?? '').trim(),
      celular: (this.form.value.celular ?? '').trim(),
      correo: (this.form.value.correo ?? '').trim(),
      motivoCotizacion: this.form.value.motivoCotizacion ?? '',
      autorizaDatos: this.form.value.autorizaDatos ?? false,
    };

    this.enviando.set(true);
    await this.diagnosticoService.enviarCotizacion(data);
    this.enviando.set(false);

    this.enviadoExito.set(true);
  }
}
