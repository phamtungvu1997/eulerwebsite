import ServiceLayout from './ServiceLayout'

export default function ManagedServicesPage() {
  return (
    <ServiceLayout
      title="Application & Infrastructure Management"
      subtitle="Run reliably, 24/7."
      description="Managed cloud, NOC, SRE, DRaaS."
      features={[
        'Managed Cloud',
        'Network Operations Center',
        'Site Reliability Engineering',
        'Disaster Recovery as a Service',
        '24/7 Monitoring',
        'Incident Response'
      ]}
      benefits={[
        'Reliable 24/7 system operation',
        'Proactive monitoring and maintenance',
        'Rapid incident response',
        'Disaster recovery planning',
        'Performance optimization',
        'Reduced operational overhead'
      ]}
    />
  )
}
