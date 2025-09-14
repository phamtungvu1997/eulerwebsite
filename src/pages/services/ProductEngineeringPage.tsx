import ServiceLayout from './ServiceLayout'

export default function ProductEngineeringPage() {
  return (
    <ServiceLayout
      title="Product Engineering"
      subtitle="MVPs, modernization, scalable platforms."
      description="Full-lifecycle SaaS development and product scaling."
      features={[
        'MVP Development',
        'Product Modernization',
        'Scalable Platforms',
        'SaaS Development',
        'Product Scaling',
        'Technical Strategy'
      ]}
      benefits={[
        'Rapid MVP development and validation',
        'Legacy system modernization',
        'Scalable platform architecture',
        'Full-lifecycle product development',
        'Technical leadership and strategy',
        'Growth-focused engineering solutions'
      ]}
    />
  )
}
