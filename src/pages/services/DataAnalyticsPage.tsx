import ServiceLayout from './ServiceLayout'

export default function DataAnalyticsPage() {
  return (
    <ServiceLayout
      title="Data & Analytics"
      subtitle="Turn raw data into real-time insights."
      description="Warehouses, pipelines, BI, big data platforms."
      features={[
        'Data Warehouses',
        'ETL Pipelines',
        'Business Intelligence',
        'Big Data Platforms',
        'Real-time Analytics',
        'Data Visualization'
      ]}
      benefits={[
        'Transform raw data into actionable insights',
        'Real-time analytics and reporting',
        'Scalable data infrastructure',
        'Advanced business intelligence',
        'Data-driven decision making',
        'Comprehensive data visualization'
      ]}
    />
  )
}
