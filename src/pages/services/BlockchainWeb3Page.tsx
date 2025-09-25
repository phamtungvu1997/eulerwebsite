// Subpage_06_Blockchain.tsx
import { Link } from "react-router-dom"
import HeroSection from "./Pieces/HeroSection"
import Section from "@/components/UI/Section"
import BulletGrid from "./Pieces/BulletGrid"
import Card from "./Pieces/Card"
import ProcessItem from "./Pieces/ProcessItem"
import FAQ from "./Pieces/FAQ"


export default function BlockchainWeb3Page() {
  return (
    <div className="font-sans text-black">
      <HeroSection
        title="Blockchain and Web3 Development"
        subtitle="Secure smart contracts, scalable dApps, enterprise Web3 solutions."
        bgImage="https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg"
        ctas={[{ label: "Get a Web3 proposal →", to: "/contact" }]}
        height="md"
        align="left"
        overlay={0.6}
      />

      <Section title="Problems We Solve" description="" className="bg-white">
        <p className="text-slate-700 leading-relaxed">
          The blockchain and Web3 revolution is fundamentally changing how businesses operate, but
          organizations struggle to harness Ethereum technology and smart contract development
          effectively. Common challenges include lack of specialized Solidity expertise leading to
          vulnerable contracts, high gas fees impacting usability, and complex security requirements
          tied to EVM mechanics.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Many businesses face challenges integrating Ethereum with enterprise systems, ensuring
          upgradeability while maintaining security, and navigating Ethereum&apos;s evolving
          ecosystem (Layer 2, EIPs). Gas optimization, testing, and tooling complexity create
          barriers for building reliable decentralized apps.
        </p>
      </Section>

      <Section title="What You Get" description="" className="bg-brand-bgElevated">
        <h3 className="text-lg font-semibold mt-6">Ethereum Smart Contract Development</h3>
        <BulletGrid
          items={[
            "Custom Solidity smart contract development with security-first approach",
            "ERC standards (ERC-20, ERC-721, ERC-1155, ERC-4626)",
            "Gas-optimized smart contract design and assembly optimization",
            "Upgradeable patterns using OpenZeppelin",
            "Multi-signature wallet and advanced access control implementations",
          ]}
        />
        <h3 className="text-lg font-semibold mt-8">Web3 dApp Development</h3>
        <BulletGrid
          items={[
            "Full-stack Ethereum dApp development with Web3 integration",
            "MetaMask and WalletConnect integration",
            "Ethereum Layer 2 (Polygon, Arbitrum, Optimism)",
            "Real-time blockchain data integration and event monitoring",
            "IPFS integration for decentralized storage",
          ]}
        />
        <h3 className="text-lg font-semibold mt-8">DeFi Protocol Development</h3>
        <BulletGrid
          items={[
            "AMM and liquidity pool development",
            "Yield farming and staking protocols",
            "Lending and borrowing protocols",
            "Governance token and DAO contracts",
            "Flash loan and arbitrage protocol development",
          ]}
        />
        <h3 className="text-lg font-semibold mt-8">Enterprise Web3 Solutions</h3>
        <BulletGrid
          items={[
            "Private Ethereum network setup",
            "Smart contract integration with enterprise systems",
            "Supply chain and provenance solutions",
            "Identity verification and KYC/AML contracts",
            "Enterprise-grade monitoring and analytics",
          ]}
        />
      </Section>

      <Section title="Team & Tools" description="" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Blockchain & Web3 Specialists">
            <p className="text-slate-700">
              Certified Solidity developers (5+ yrs), blockchain security auditors, DeFi protocol
              architects, testing specialists, and gas optimization experts ensuring secure and
              cost-efficient execution.
            </p>
          </Card>
          <Card title="Ethereum & Web3 Technology Stack">
            <p className="text-slate-700">
              Solidity, Hardhat, Foundry, Truffle, Mythril, Slither, MythX, Ethers.js, Web3.js,
              Wagmi, React/Next.js + RainbowKit, Infura, Alchemy, QuickNode, Polygon SDK, Arbitrum,
              Optimism.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Our Process" description="" className="bg-brand-bgElevated">
        <ol className="grid gap-4 md:grid-cols-2">
          {[
            ["Web3 Architecture Design", "Requirements, network selection, gas estimation, threat modeling."],
            ["Smart Contract Development", "Solidity coding, unit testing, optimization, docs, internal review."],
            ["Security Audit & Testing", "Automated tools, manual review, testnet deploy, 3rd-party audit."],
            ["Web3 Deployment", "Mainnet deploy, dApp frontend, monitoring, docs, post-deploy support."],
          ].map(([t, d], i) => (
            <ProcessItem key={t as string} index={i + 1} title={t as string} desc={d as string} />
          ))}
        </ol>
      </Section>

      <Section title="FAQs" description="" className="bg-white">
        <FAQ
          items={[
            {
              q: "Why focus on Ethereum for Web3 development?",
              a: "Ethereum offers the largest ecosystem, mature tooling, strong security, and network effects. Layer 2 solutions (Polygon, Arbitrum) reduce costs significantly.",
            },
            {
              q: "How do you ensure our smart contracts are secure?",
              a: "By following OpenZeppelin standards, automated testing, audit tools, manual reviews, and post-deployment monitoring.",
            },
            {
              q: "What are typical gas costs and how do you optimize them?",
              a: "Gas varies with congestion. We use efficient data structures, batching, assembly optimization, and Layer 2 deployment to cut costs by 50–90%.",
            },
            {
              q: "Can smart contracts be updated after deployment?",
              a: "By default, contracts are immutable. We implement proxy upgrade patterns with OpenZeppelin framework when required.",
            },
            {
              q: "How long does blockchain development take?",
              a: "Simple ERC-20 tokens: 1–2 weeks. Complex DeFi protocols: 6–12 weeks, depending on security and audit scope.",
            },
            {
              q: "Do you support Ethereum Layer 2 solutions?",
              a: "Yes, Polygon, Arbitrum, and Optimism for low-cost, faster transactions with Ethereum security.",
            },
            {
              q: "What ongoing support do you provide?",
              a: "Comprehensive monitoring, gas optimization, patching, upgrades, and 24/7 emergency response.",
            },
          ]}
        />
      </Section>

      <Section title="Why Choose Euler Digital Service?" description="" className="bg-brand-bgElevated">
        <BulletGrid
          items={[
            "Proven expertise with a decade of complex IT solutions",
            "Global reach, local service with 24/7 delivery centers",
            "Technology-agnostic, best-fit solutions",
            "Agile methodology with rapid delivery and feedback loops",
            "Security-first approach in every solution",
          ]}
          checkColor="bg-indigo-500"
        />
      </Section>

      <Section title="" description="" className="bg-white">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
        >
          Get a Web3 proposal →
        </Link>
      </Section>
    </div>
  )
}
