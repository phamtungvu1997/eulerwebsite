import ServiceLayout from './ServiceLayout'

export default function CybersecurityPage() {
  return (
    <ServiceLayout
      title="Cybersecurity Services"
      subtitle="Security that scales with your stack."
      description="Assessments, compliance (GDPR/HIPAA), SOC, zero-trust."
      features={[
        'Security Assessments',
        'GDPR Compliance',
        'HIPAA Compliance',
        'SOC Implementation',
        'Zero-Trust Architecture',
        'Security Monitoring'
      ]}
      benefits={[
        'Comprehensive security assessments',
        'Regulatory compliance expertise',
        'Zero-trust security architecture',
        '24/7 security monitoring',
        'Incident response planning',
        'Security awareness training'
      ]}
    />
  )
}
