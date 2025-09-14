import ServiceLayout from './ServiceLayout'

export default function DedicatedTeamsPage() {
  return (
    <ServiceLayout
      title="Augmented Offices & Dedicated Teams"
      subtitle="Add velocity fast. Retain domain knowledge."
      description="Staff augmentation, 3–5 person pods, squads, BOT & ODC models."
      features={[
        'Staff Augmentation',
        '3-5 Person Pods',
        'Squad Teams',
        'BOT Models',
        'ODC Models',
        'Domain Expertise'
      ]}
      benefits={[
        'Rapid team scaling with minimal onboarding time',
        'Retain critical domain knowledge and expertise',
        'Flexible engagement models to fit your needs',
        'Dedicated resources focused on your success',
        'Proven methodologies and best practices',
        'Seamless integration with your existing teams'
      ]}
    />
  )
}
