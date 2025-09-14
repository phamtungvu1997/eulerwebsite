import ServiceLayout from './ServiceLayout'

export default function AutomationPage() {
  return (
    <ServiceLayout
      title="Process Automation"
      subtitle="Free your team from busywork."
      description="IPA, RPA, workflow automation, process mining."
      features={[
        'Intelligent Process Automation',
        'Robotic Process Automation',
        'Workflow Automation',
        'Process Mining',
        'Business Process Optimization',
        'Digital Transformation'
      ]}
      benefits={[
        'Eliminate repetitive manual tasks',
        'Improved process efficiency',
        'Reduced human error',
        'Cost savings and ROI',
        'Scalable automation solutions',
        'Enhanced employee productivity'
      ]}
    />
  )
}
