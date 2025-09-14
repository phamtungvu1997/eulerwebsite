import ServiceLayout from './ServiceLayout'

export default function CloudServicesPage() {
  return (
    <ServiceLayout
      title="Cloud Services & Transformation"
      subtitle="Optimize spend. Improve resilience."
      description="Migration, IaC, CI/CD, FinOps, multi-cloud."
      features={[
        'Cloud Migration',
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'FinOps Optimization',
        'Multi-Cloud Strategy',
        'Disaster Recovery'
      ]}
      benefits={[
        'Cost optimization and spend management',
        'Improved system resilience and reliability',
        'Automated infrastructure management',
        'Seamless cloud migration strategies',
        'Multi-cloud architecture design',
        '24/7 monitoring and support'
      ]}
    />
  )
}
