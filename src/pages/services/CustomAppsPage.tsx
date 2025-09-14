import ServiceLayout from './ServiceLayout'

export default function CustomAppsPage() {
  return (
    <ServiceLayout
      title="Custom Application Development"
      subtitle="Web, mobile, APIs. Secure, scalable, performant."
      description="API-first, microservices, mobile apps, PWAs."
      features={[
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'Microservices',
        'Progressive Web Apps',
        'Cross-Platform Solutions'
      ]}
      benefits={[
        'Secure and scalable application architecture',
        'High-performance user experiences',
        'API-first development approach',
        'Microservices-based architecture',
        'Cross-platform mobile solutions',
        'Modern web technologies and frameworks'
      ]}
    />
  )
}
