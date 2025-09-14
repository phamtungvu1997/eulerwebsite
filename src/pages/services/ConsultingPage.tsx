import ServiceLayout from './ServiceLayout'

export default function ConsultingPage() {
  return (
    <ServiceLayout
      title="Web and Mobile App Development"
      subtitle="Clear roadmaps. Lower risk."
      description="CTOaaS, due diligence, architecture review."
      features={[
        'CTO as a Service',
        'Technical Due Diligence',
        'Architecture Review',
        'Technology Strategy',
        'Risk Assessment',
        'Technical Leadership'
      ]}
      benefits={[
        'Clear technology roadmaps',
        'Reduced project risk',
        'Expert technical leadership',
        'Comprehensive due diligence',
        'Architecture optimization',
        'Strategic technology guidance'
      ]}
    />
  )
}
