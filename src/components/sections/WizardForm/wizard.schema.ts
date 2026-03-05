import { z } from 'zod'

export const profileSchema = z.object({
  profile: z.enum(['frontend', 'backend', 'fullstack', 'ux-ui', 'data', 'devops'], {
    required_error: 'Selecciona un perfil',
  }),
})

export const hoursSchema = z.object({
  hours: z.enum(['part-time', 'full-time', 'per-project'], {
    required_error: 'Selecciona una dedicación',
  }),
})

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Mínimo 2 caracteres' })
    .max(100, { message: 'Máximo 100 caracteres' }),
  email: z
    .string()
    .email({ message: 'Ingresa un correo electrónico válido' }),
  company: z
    .string()
    .min(2, { message: 'Mínimo 2 caracteres' })
    .max(100, { message: 'Máximo 100 caracteres' }),
  message: z
    .string()
    .max(1000, { message: 'Máximo 1000 caracteres' })
    .optional(),
  honeypot: z.string().max(0).optional(), // Must be empty — bot trap
})

export const wizardSchema = profileSchema.merge(hoursSchema).merge(contactSchema)

export type ProfileFormData = z.infer<typeof profileSchema>
export type HoursFormData = z.infer<typeof hoursSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type WizardSchemaData = z.infer<typeof wizardSchema>
