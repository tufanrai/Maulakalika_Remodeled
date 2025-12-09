// Centralized data for projects and news

export const projects = [
  {
    _id: "upper-maulakalika",
    title: "Upper Maulakalika Hydro Project",
    capacity: "42 MW",
    status: "Ongoing",
    location: "Maulakalika Region, Nepal",
    startYear: "2020",
    description:
      "A flagship run-of-river project harnessing the power of glacial streams. This project represents our commitment to sustainable energy development in Nepal's remote regions.",
    url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
    features: [
      "Run-of-river design",
      "Minimal environmental impact",
      "Community partnership",
    ],
    fullDescription: `The Upper Maulakalika Hydro Project is our flagship initiative, designed to harness the pristine glacial waters of the Maulakalika region. This 42 MW run-of-river project exemplifies our commitment to sustainable hydropower development.

The project utilizes advanced Pelton turbine technology, optimized for the high-head, low-flow characteristics of Himalayan rivers. Our engineering team has implemented cutting-edge sediment management systems to ensure long-term operational efficiency.

Key highlights include community benefit-sharing agreements, local employment initiatives, and environmental conservation programs that protect the delicate mountain ecosystem while delivering clean energy to thousands of households.`,
    technicalSpecs: {
      type: "Run-of-River",
      headHeight: "485 meters",
      turbineType: "Pelton",
      annualGeneration: "180 GWh",
      gridConnection: "132 kV Transmission Line",
    },
    timeline: [
      {
        year: "2020",
        milestone: "Project Initiation & Environmental Assessment",
      },
      { year: "2021", milestone: "Land Acquisition & Community Agreements" },
      { year: "2022", milestone: "Tunnel Construction Commenced" },
      { year: "2023", milestone: "Powerhouse Foundation Completed" },
      { year: "2024", milestone: "Turbine Installation In Progress" },
      { year: "2025", milestone: "Expected Commercial Operation" },
    ],
  },
  {
    _id: "river-basin-diversion",
    title: "River Basin Diversion Project",
    capacity: "30 MW",
    status: "Planning",
    location: "Western Nepal",
    startYear: "2024",
    description:
      "Strategic water diversion infrastructure for optimized power generation. This innovative approach maximizes output while preserving natural waterways.",
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    features: [
      "Diversion tunnel system",
      "Modern turbine technology",
      "Grid connectivity ready",
    ],
    fullDescription: `The River Basin Diversion Project represents an innovative approach to hydropower generation in Western Nepal. By strategically redirecting water flow through a network of tunnels, we maximize energy output while maintaining natural river ecosystems.

This 30 MW project incorporates Francis turbine technology, selected for optimal efficiency at the site's specific head and flow conditions. The project design prioritizes environmental sustainability, with fish passage facilities and minimum environmental flow releases.

Our planning phase includes extensive stakeholder engagement, ensuring that local communities benefit from the project through employment, infrastructure development, and revenue sharing agreements.`,
    technicalSpecs: {
      type: "Diversion",
      headHeight: "220 meters",
      turbineType: "Francis",
      annualGeneration: "130 GWh",
      gridConnection: "66 kV Transmission Line",
    },
    timeline: [
      { year: "2024", milestone: "Feasibility Study & DPR Preparation" },
      { year: "2025", milestone: "Environmental & Social Impact Assessment" },
      { year: "2026", milestone: "Construction Phase 1 - Access Roads" },
      { year: "2027", milestone: "Construction Phase 2 - Main Works" },
      { year: "2028", milestone: "Expected Commercial Operation" },
    ],
  },
  {
    _id: "lower-valley-station",
    title: "Lower Valley Hydroelectric Station",
    capacity: "25 MW",
    status: "Completed",
    location: "Central Nepal",
    startYear: "2018",
    description:
      "Our first completed project, now successfully generating clean energy for thousands of households across the region.",
    url: "https://images.unsplash.com/photo-1518173946687-a4c036bc1c9a?w=800&auto=format&fit=crop",
    features: [
      "Fully operational",
      "25,000+ homes powered",
      "Zero carbon emissions",
    ],
    fullDescription: `The Lower Valley Hydroelectric Station stands as a testament to Maulakalika Hydro Power's engineering excellence and commitment to Nepal's energy future. Completed in 2021, this 25 MW facility has been reliably generating clean electricity for over three years.

The station utilizes twin Francis turbines, optimized for the river's seasonal flow variations. Advanced automation systems ensure maximum efficiency while minimizing operational costs. The project has achieved a remarkable plant availability factor of over 95%.

Beyond power generation, this project has transformed the local community, providing permanent employment for over 50 individuals and supporting local schools and healthcare facilities through our community development fund.`,
    technicalSpecs: {
      type: "Run-of-River",
      headHeight: "180 meters",
      turbineType: "Francis (Twin)",
      annualGeneration: "110 GWh",
      gridConnection: "33 kV Transmission Line",
    },
    timeline: [
      { year: "2018", milestone: "Project Construction Commenced" },
      { year: "2019", milestone: "Civil Works Completed" },
      { year: "2020", milestone: "Electromechanical Installation" },
      { year: "2021", milestone: "Commercial Operation Achieved" },
      { year: "2024", milestone: "3+ Years Successful Operation" },
    ],
  },
];

export const newsItems = [
  {
    _id: "upper-maulakalika-80-percent",
    title: "Upper Maulakalika Project Reaches 80% Completion",
    excerpt:
      "Major milestone achieved as the flagship 42 MW project nears operational readiness.",
    date: "November 28, 2024",
    category: "Project Update",
    url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop",
    content: `We are pleased to announce that the Upper Maulakalika Hydro Project has achieved a significant milestone, reaching 80% completion. This flagship 42 MW project is now on track for commercial operation in 2025.

## Construction Progress

The headrace tunnel, spanning over 5 kilometers, has been successfully completed. The powerhouse structure is now ready for turbine installation, with the first of three Pelton units scheduled for delivery next month.

## Key Achievements

- Headrace tunnel breakthrough achieved ahead of schedule
- Penstock installation 90% complete
- Transmission line construction progressing well
- Local employment has reached peak levels with over 500 workers on site

## Community Impact

Throughout construction, we have maintained our commitment to local communities. Over 70% of the workforce comprises local residents, and we have invested in road improvements that benefit the entire region.

## Looking Ahead

With the monsoon season concluding, we anticipate accelerated progress over the coming months. Commissioning activities are expected to begin in Q2 2025, with full commercial operation targeted for Q3 2025.

We thank all stakeholders, investors, and community members for their continued support as we work towards delivering clean energy to Nepal.`,
  },
  {
    _id: "agm-2024",
    title: "Annual General Meeting 2024 Successfully Concluded",
    excerpt:
      "Shareholders gather to review company performance and approve strategic plans for the coming year.",
    date: "October 15, 2024",
    category: "Corporate",
    url: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?w=600&auto=format&fit=crop",
    content: `Maulakalika Hydro Power Company Pvt. Ltd. successfully concluded its Annual General Meeting for fiscal year 2024 on October 15, 2024, at our head office in Kathmandu.

## Meeting Highlights

The AGM was attended by shareholders representing over 85% of the company's total shares. Key agenda items included:

- Review and approval of audited financial statements
- Appointment of statutory auditors for the coming year
- Discussion of dividend distribution policy
- Presentation of strategic development plan 2025-2030

## Financial Performance

The company reported strong financial performance for the fiscal year, with:

- Revenue growth of 18% year-over-year from the Lower Valley station
- Successful project financing arrangements for Upper Maulakalika
- Improved operational efficiency across all facilities

## Strategic Initiatives Approved

Shareholders approved several strategic initiatives including:

1. Expansion of the project portfolio to include solar-hydro hybrid systems
2. Investment in advanced monitoring and control systems
3. Enhanced community development programs

## Board Appointments

The AGM confirmed the re-election of existing board members and welcomed two new independent directors with expertise in renewable energy finance and environmental sustainability.

We extend our gratitude to all shareholders for their continued trust and support.`,
  },
  {
    _id: "grid-partnership",
    title: "New Partnership Announced for Grid Infrastructure",
    excerpt:
      "Strategic collaboration to enhance power transmission capabilities across the region.",
    date: "September 5, 2024",
    category: "Partnership",
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop",
    content: `Maulakalika Hydro Power Company has entered into a strategic partnership with Nepal Electricity Authority (NEA) to enhance grid infrastructure in the project region.

## Partnership Overview

This collaboration addresses one of the critical challenges facing hydropower development in Nepal: adequate transmission infrastructure. The partnership will facilitate:

- Construction of a new 132 kV transmission line
- Upgrading of existing substations
- Implementation of smart grid technologies
- Enhanced grid stability and reliability

## Investment Details

The total investment for grid infrastructure improvements is estimated at NPR 2.5 billion, to be jointly funded by:

- Maulakalika Hydro Power Company: 40%
- Nepal Electricity Authority: 35%
- Development Partner Financing: 25%

## Timeline and Implementation

Construction of the new transmission infrastructure will proceed in phases:

**Phase 1 (2024-2025):** Substation upgrades and initial line construction
**Phase 2 (2025-2026):** Completion of 132 kV transmission line
**Phase 3 (2026):** Smart grid integration and commissioning

## Benefits

This partnership will benefit multiple stakeholders:

- Reliable power evacuation for our Upper Maulakalika project
- Improved electricity access for local communities
- Enhanced grid stability for the entire western region
- Foundation for future renewable energy projects

We look forward to this collaborative effort that will contribute significantly to Nepal's energy security.`,
  },
];
