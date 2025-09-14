import ServiceLayout from './ServiceLayout'

export default function BlockchainWeb3Page() {
  return (
    <ServiceLayout
      title="Blockchain and Web3 Development"
      subtitle="De-risk innovation."
      description="IoT, AR/VR, Web3, low-code, edge."
      features={[
        'Blockchain Development',
        'Web3 Applications',
        'IoT Solutions',
        'AR/VR Development',
        'Low-Code Platforms',
        'Edge Computing'
      ]}
      benefits={[
        'Innovation with reduced risk',
        'Cutting-edge technology implementation',
        'Decentralized application development',
        'IoT ecosystem integration',
        'Immersive AR/VR experiences',
        'Edge computing optimization'
      ]}
    />
  )
}
