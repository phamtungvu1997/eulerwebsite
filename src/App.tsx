import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Service pages
const DedicatedTeamsPage = lazy(() => import('./pages/services/DedicatedTeamsPage'))
const AiMlPage = lazy(() => import('./pages/services/AiMlPage'))
const CloudServicesPage = lazy(() => import('./pages/services/CloudServicesPage'))
const CustomAppsPage = lazy(() => import('./pages/services/CustomAppsPage'))
const ProductEngineeringPage = lazy(() => import('./pages/services/ProductEngineeringPage'))
const BlockchainWeb3Page = lazy(() => import('./pages/services/BlockchainWeb3Page'))
const DataAnalyticsPage = lazy(() => import('./pages/services/DataAnalyticsPage'))
const QaTestingPage = lazy(() => import('./pages/services/QaTestingPage'))
const CybersecurityPage = lazy(() => import('./pages/services/CybersecurityPage'))
const ConsultingPage = lazy(() => import('./pages/services/ConsultingPage'))
const ManagedServicesPage = lazy(() => import('./pages/services/ManagedServicesPage'))
const AutomationPage = lazy(() => import('./pages/services/AutomationPage'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Service Routes */}
          <Route path="/services/dedicated-teams" element={<DedicatedTeamsPage />} />
          <Route path="/services/ai-ml" element={<AiMlPage />} />
          <Route path="/services/cloud" element={<CloudServicesPage />} />
          <Route path="/services/custom-apps" element={<CustomAppsPage />} />
          <Route path="/services/product-engineering" element={<ProductEngineeringPage />} />
          <Route path="/services/advanced-tech" element={<BlockchainWeb3Page />} />
          <Route path="/services/data" element={<DataAnalyticsPage />} />
          <Route path="/services/qa-testing" element={<QaTestingPage />} />
          <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/services/consulting" element={<ConsultingPage />} />
          <Route path="/services/managed-services" element={<ManagedServicesPage />} />
          <Route path="/services/automation" element={<AutomationPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
