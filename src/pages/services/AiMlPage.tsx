import ServiceLayout from './ServiceLayout'

export default function AiMlPage() {
  return (
    <ServiceLayout
      title="AI/ML Development & Integration"
      subtitle="From proof of concept to production."
      description="Custom models, MLOps, CV, chatbots, automation."
      features={[
        'Custom Models',
        'MLOps Pipeline',
        'Computer Vision',
        'Chatbots',
        'Process Automation',
        'Model Deployment'
      ]}
      benefits={[
        'End-to-end AI/ML solution development',
        'Production-ready model deployment',
        'Automated ML operations and monitoring',
        'Custom computer vision solutions',
        'Intelligent chatbot development',
        'Scalable AI infrastructure'
      ]}
    />
  )
}
