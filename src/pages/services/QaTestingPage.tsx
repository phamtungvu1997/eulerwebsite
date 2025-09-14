import ServiceLayout from './ServiceLayout'

export default function QaTestingPage() {
  return (
    <ServiceLayout
      title="QA & Testing"
      subtitle="Test faster. Ship with confidence."
      description="Automation, performance, continuous testing."
      features={[
        'Test Automation',
        'Performance Testing',
        'Continuous Testing',
        'Security Testing',
        'Load Testing',
        'Quality Assurance'
      ]}
      benefits={[
        'Faster testing cycles and deployment',
        'Automated testing frameworks',
        'Performance optimization',
        'Continuous integration testing',
        'Comprehensive security testing',
        'Confident software releases'
      ]}
    />
  )
}
