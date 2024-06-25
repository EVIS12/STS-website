import flight from '@/public/imgs/flight.webp';
import experience from '@/public/imgs/experience.webp';
import visa from '@/public/imgs/visa.webp';

import {
  AgentIcon,
  CGARIcon,
  EarthIcon,
  FacebookIcon,
  GrayLinkedInIcon,
  InstagramIcon,
  RocketIcon,
  ShieldDollarSign,
  SpaceMissionIcon,
  SpaceTravelIcon,
  StarsIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/public/icons/SVGIcons';

import industryUpdates from '@/public/imgs/industryUpdates.webp';
import meetEcosystem from '@/public/imgs/meetEcosystem.webp';
import contributeToFuture from '@/public/imgs/contributeToFuture.webp';

import {
  DelegateIcon,
  SpeakersIcon,
  SessionsIcon,
  NetworkingIcon,
  leadershipIcon,
  maxVisibilityIcon,
  networkIcon,
  pioneeringIcon,
  boothIcon,
  brandLaunchIcon,
  techShowIcon,
  visionToStrategyIcon,
  spaceInfrastructureIcon,
  partnershipIcon,
  spaceTravelIcon,
  trendingTechnologiesIcon,
  startupIcon,
  spaceAccessibilityIcon,
  resourcesUtilizationIcon,
  spaceInnovationIcon,
  knowledgeExchange,
  exhibitionInnovation,
  brandAuthority,
} from '@/public/icons';

export const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Exhibition', link: '/exhibition' },
  { title: 'Conference', link: '/conference' },
  { title: 'Plan your visit', link: '/plan-visit' },
  { title: 'Register', link: '/registration' },
];

export const statistics = [
  {
    icon: DelegateIcon,
    key: 'delegates',
    title: 'Delegates Global Presence',
  },
  {
    icon: SpeakersIcon,
    key: 'speakers',
    title: 'Speakers Leading Industry Experts',
  },
  {
    icon: SessionsIcon,
    key: 'sessions',
    title: 'Sessions Space Travel End to End',
  },
  {
    icon: NetworkingIcon,
    key: 'networking_connect',
    title: 'Networking Public & Private Sectors',
  },
];

export const keyInsights = [
  {
    Icon: EarthIcon,
    report_url: 'https://www.morganstanley.com/ideas/investing-in-space',
    number: '1',
    title: 'Trillion',
    description:
      'Increase in global space industry revenue by 2040 according to Morgan Stanley.',
  },
  {
    Icon: CGARIcon,
    report_url: 'https://www.precedenceresearch.com/space-tourism-market',
    number: '16.2%',
    title: 'in CAGR',
    description:
      'Space Tourism market is projected to surpass 16.2% CAGR increase from 2023 to 2032 according to Precedence Research.',
  },
  {
    Icon: ShieldDollarSign,
    report_url:
      'https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/a-different-space-race-raising-capital-and-accelerating-growth-in-space#/',
    number: '10',
    title: 'Billion',
    description:
      'Public and Private markets invested $10 billion capital in space companies in 2021 only (Mckinsey).',
  },
  {
    Icon: SpaceMissionIcon,
    report_url:
      'https://www.nasdaq.com/articles/investing-in-the-space-industry%3A-a-beginners-guide',
    number: '178',
    title: 'Space Missions',
    description:
      'In 2022, there were 178 space missions, 90 of which were conducted by the private sector with a decline of more than 95% in costs of launches into LEO (Nasdaq).',
  },
];

export const socialLinks = [
  {
    title: 'Facebook Link',
    icon: <FacebookIcon />,
    url: 'https://www.facebook.com/STSsummit',
  },
  {
    title: 'Twitter Link',
    icon: <TwitterIcon />,
    url: 'https://twitter.com/STSsummit',
  },
  {
    title: 'Instagram Link',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/spacetravelsts/',
  },
  {
    title: 'Youtube Link',
    icon: <YoutubeIcon />,
    url: 'https://www.youtube.com/@SpaceTravelSummit',
  },
  {
    title: 'Linkedin Link',
    icon: <GrayLinkedInIcon />,
    url: 'https://www.linkedin.com/company/space-travel-summit/',
  },
];

export const whyAttendSTS = [
  {
    title: 'Meet the Ecosystem',
    details:
      'Interact with space travel industry pioneers and entrepreneurs. This is an invaluable opportunity to exchange ideas, gain new insights, and cultivate meaningful connections that transcend conventional boundaries.',
    imageUrl: meetEcosystem,
  },
  {
    title: 'Get Industry Updates',
    details:
      'Access all the groundbreaking research and technologies that currently driving the space travel operations and growth. Enhance your knowledge reservoir, current plans and future goals.',
    imageUrl: industryUpdates,
  },
  {
    title: 'Contribute to the Future',
    details:
      'By participating, you have the opportunity to influence key conversations, drive innovative ideas, and play a role in shaping the strategies and technologies that will define tomorrow’s space travel industry.',
    imageUrl: contributeToFuture,
  },
];

export const downloadFileInputs = [
  {
    key: 'name',
    title: 'Name',
    placeHolder: 'ex: Mark Dave',
    type: 'text',
    properties: { required: 'Name is Required' },
  },
  {
    key: 'company',
    title: 'Company',
    placeHolder: 'ex: Nirvana Holding',
    type: 'text',
    properties: { required: 'Company is Required' },
  },
  {
    key: 'email',
    title: 'Email',
    placeHolder: 'ex: user@example.com',
    type: 'email',
    properties: {
      required: 'Email is Required',
      pattern: {
        value:
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
        message: 'Invalid Email.',
      },
    },
  },
  {
    key: 'country',
    title: 'Country',
    placeHolder: 'ex: UAE',
    type: 'text',
    properties: {
      required: 'Country is required',
    },
  },
  {
    key: 'phone',
    title: 'Phone',
    placeHolder: 'ex: +97150 686 3956',
    type: 'tel',
    properties: {
      required: 'Phone is required',
    },
  },
  {
    key: 'industry',
    title: 'Industry',
    placeHolder: 'ex: EV Mobility',
    type: 'text',
    properties: {
      required: 'Industry is required',
    },
  },
  {
    key: 'interested_in',
    title: 'I am interested in',
    type: 'select',
    options: [
      'Attending as a delegate',
      'Exhibiting',
      'Sponsorship Opportunities',
      'Speaking',
      'All',
    ],
    properties: {
      required: 'Interesting is required',
    },
  },
];

export const registerFormInputs = [
  {
    key: 'email',
    title: 'Email',
    type: 'email',
    properties: {
      required: 'Email is Required',
      pattern: {
        value:
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
        message: 'Invalid Email.',
      },
    },
  },
  {
    key: 'name',
    title: 'Name',
    type: 'text',
    properties: { required: 'Name is Required' },
  },
  {
    key: 'job_title',
    title: 'Job Title',
    type: 'text',
    properties: { required: 'Job title is Required' },
  },
  {
    key: 'company_name',
    title: 'Company Name',
    type: 'text',
    properties: { required: 'Company name is Required' },
  },
  {
    key: 'address',
    title: 'Address',
    type: 'text',
    properties: { required: 'Address is Required' },
  },
  {
    key: 'city',
    title: 'City',
    type: 'text',
    properties: { required: 'City is Required' },
  },
  {
    key: 'country',
    title: 'Country',
    type: 'text',
    properties: { required: 'Country is Required' },
  },
  {
    key: 'phone_number',
    title: 'Mobile Phone',
    type: 'tel',
    properties: { required: 'Mobile phone is Required' },
  },
  {
    key: 'business_nature',
    title: 'Business Nature',
    type: 'text',
    properties: { required: 'Business nature is Required' },
  },
  {
    key: 'interested_in',
    title: 'I am interested in',
    type: 'select',
    options: ['Attending', 'Exhibiting', 'Sponsoring', 'Speaking', 'All'],
    properties: {
      required: 'Interesting is required',
    },
  },
];

export const speakerOpportunities = [
  {
    title: 'Panel Discussions',
    description:
      'Engage in meaningful debates and discussions on pertinent topics related to space commerce.',
  },
  {
    title: 'Keynote Sessions',
    description:
      'Lead the conversation and inspire attendees with your insights and experiences.',
  },
  {
    title: 'Workshops & Masterclasses',
    description:
      'Provide hands-on training or deep dives into specialized areas of the industry.',
  },
  {
    title: 'Innovation Showcases',
    description:
      'Highlight pioneering projects and technologies set to revolutionize space commerce.',
  },
];

export const topicsExpolring = [
  'Strategic Insights in Space Commerce',
  'Technological Innovations in Space Travel',
  'Investment Opportunities in Space Exploration',
  'Space Commerce Regulations & Policies',
  'Collaborative Projects & Partnerships in Space',
];

export const keyBenefitsOfExhibit = [
  {
    Icon: pioneeringIcon,
    title: 'Pioneering Presence',
    description:
      'Establish your brand as a frontrunner at the onset of a significant industry event.',
  },
  {
    Icon: maxVisibilityIcon,
    title: 'Maximized Visibility',
    description:
      "Benefit from targeted marketing efforts for the summit's debut.",
  },
  {
    Icon: leadershipIcon,
    title: 'Leadership Opportunities',
    description:
      'Offer insights and set the tone for future discourse in the industry.',
  },
  {
    Icon: networkIcon,
    title: 'Networking',
    description: 'Forge invaluable connections right from the start.',
  },
];

export const sponsorOpportunities = [
  {
    title: 'Platinum Launch Sponsor',
    description:
      'As our premier sponsor, enjoy maximum brand visibility, premium booth location, and exclusive networking opportunities. Your brand will be at the forefront of our event promotions and communications.',
  },
  {
    title: 'Gold Launch Sponsor',
    description:
      'Gain significant brand exposure with a priority booth location and enhanced marketing presence. Your brand will be prominently featured in our event materials and digital platforms.',
  },
  {
    title: 'Silver Launch Sponsor',
    description:
      "Secure strategic brand placement, booth space, and be featured in selected event promotions. Engage with our attendees and elevate your organization's presence.",
  },
  {
    title: 'Innovation Spotlight',
    description:
      'Have a dedicated space to introduce and showcase your groundbreaking projects and technologies. Engage with attendees curious about the latest industry advancements.',
  },
  {
    title: 'Launch Reception Sponsor',
    description:
      "Anchor your role as an industry leader by hosting or sponsoring the official event kickoff. Engage with attendees in a memorable setting and strengthen your brand's impact.",
  },
];

export const exhibitorOpportunities = [
  {
    Icon: boothIcon,
    title: 'Premier Booth Spaces',
    description: 'Prime locations for attendees to discover your brand.',
  },
  {
    Icon: techShowIcon,
    title: 'Tech Showcase Zones',
    description: 'Debut your products or services to an eager audience.',
  },
  {
    Icon: brandLaunchIcon,
    title: 'Brand Launchpad',
    description:
      'Utilize event materials, the venue, and the event website to introduce your brand to attendees.',
  },
];

export const registrationOptionsInfo = [
  {
    title: 'Full Conference Pass',
    packages: [
      'Access to all keynote sessions, panel discussions, and workshops',
      'Lunch and refreshments provided on all conference days',
      'Networking opportunities with industry professionals and thought leaders',
    ],
  },
  // {
  //   title: 'Day Pass',
  //   packages: [
  //     'Choose one day of the conference to attend',
  //     'Access to all sessions, panel discussions, and workshops for the selected day',
  //     'Lunch and refreshments provided for the selected day',
  //   ],
  // },
  {
    title: 'Student Pass',
    packages: [
      'Discounted rate for students with a valid ID',
      'Access to all keynote sessions, panel discussions, and workshops',
      'Lunch and refreshments provided on all conference days',
    ],
  },
];

export const registrationDetailsInfo = [
  {
    title: 'Early Bird Rate 1',
    offers: ['Available until July 30 2024', 'Ticket price: $375'],
  },
  {
    title: 'Early Bird Rate 2',
    offers: ['Available until October 30 2024', 'Ticket price: $425'],
  },
  {
    title: 'Standard Rate',
    offers: ['After Early Bird Deadline', 'Ticket price: $500'],
  },
];

export const privacyGuidelines = [
  {
    title: 'COLLECTION OF PERSONAL INFORMATION',
    sublist: [
      {
        title:
          'You can access and use the Website and Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the features offered on the Website, you may be asked to provide certain Personal Information (for example, your name and e-mail address).',
      },
      {
        title:
          'We receive and store any information you knowingly provide to us when you create an account, make a purchase, or fill any forms on the Website. When required, this information may include the following:',
        list: [
          'Account details (such as user name, unique user ID, password, etc.)',
          'Contact information (such as email address, phone number, etc.)',
          'Basic personal information (such as name, country of residence, etc.)',
          'Information about other individuals (such as your family members, friends, etc.)',
        ],
      },
      {
        title:
          'Some of the information we collect is directly from you via the Website and Services. However, we may also collect Personal Information about you from other sources such as social media platforms and our joint partners. Personal Information we collect from other sources may include demographic information, such as age and gender, device information, such as IP addresses, location, such as city and state, and online behavioral data, such as information about your use of social media websites, page view information and search results and links.',
      },
      {
        title:
          'You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the Website. Users who are uncertain about what information is mandatory are welcome to contact us.',
      },
    ],
  },
  {
    title: 'PRIVACY OF CHILDREN',
    sublist: [
      {
        title:
          'We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Website and Services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Website and Services, please contact us to request that we delete that child’s Personal Information from our Services.',
      },
      {
        title:
          'We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Website and Services without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission.',
      },
    ],
  },
  {
    title: 'USE AND PROCESSING OF COLLECTED INFORMATION',
    sublist: [
      {
        title:
          'We act as a data controller and a data processor in terms of the GDPR when handling Personal Information, unless we have entered into a data processing agreement with you in which case you would be the data controller and we would be the data processor.',
      },
      {
        title:
          'Our role may also differ depending on the specific situation involving Personal Information. We act in the capacity of a data controller when we ask you to submit your Personal Information that is necessary to ensure your access and use of the Website and Services. In such instances, we are a data controller because we determine the purposes and means of the processing of Personal Information and we comply with data controllers’ obligations set forth in the GDPR.',
      },
      {
        title:
          'We act in the capacity of a data processor in situations when you submit Personal Information through the Website and Services. We do not own, control, or make decisions about the submitted Personal Information, and such Personal Information is processed only in accordance with your instructions. In such instances, the User providing Personal Information acts as a data controller in terms of the GDPR.',
      },
      {
        title:
          'In order to make the Website and Services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Any of the information we collect from you may be used for the following purposes:',
        list: [
          'Create and manage user accounts',
          'Fulfill and manage orders',
          'Deliver products or services',
          'Improve products and services',
          'Send marketing and promotional communications',
          'Respond to inquiries and offer support',
          'Request user feedback',
          'Improve user experience',
          'Post customer testimonials',
          'Enforce terms and conditions and policies',
          'Respond to legal requests and prevent harm',
          'Run and operate the Website and Services',
        ],
      },
      {
        title:
          'Processing your Personal Information depends on how you interact with the Website and Services, where you are located in the world and if one of the following applies: (i) you have given your consent for one or more specific purposes; this, however, does not apply, whenever the processing of Personal Information is subject to California Consumer Privacy Act or European data protection law; (ii) provision of information is necessary for the performance of this Policy with you and/or for any pre-contractual obligations thereof; (iii) processing is necessary for compliance with a legal obligation to which you are subject; (iv) processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) processing is necessary for the purposes of the legitimate interests pursued by us or by a third party.',
      },
      {
        title:
          'We rely on user’s consent and compliance with the law and legal obligations as legal bases as defined in the GDPR upon which we collect and process your Personal Information.',
      },
      {
        title:
          'Note that under some legislations we may be allowed to process information until you object to such processing by opting out, without having to rely on consent or any other of the legal bases above. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract.',
      },
    ],
  },
  {
    title: 'PAYMENT PROCESSING',
    sublist: [
      {
        title:
          'In case of Services requiring payment, you may need to provide your credit card details or other payment account information, which will be used solely for processing payments. We use third-party payment processors (“Payment Processors”) to assist us in processing your payment information securely.',
      },
      {
        title:
          'Payment Processors adhere to the latest security standards as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. Sensitive and private data exchange happens over a SSL secured communication channel and is encrypted and protected with digital signatures, and the Website and Services are also in compliance with strict vulnerability standards in order to create as secure of an environment as possible for Users. We will share payment data with the Payment Processors only to the extent necessary for the purposes of processing your payments, refunding such payments, and dealing with complaints and queries related to such payments and refunds.',
      },
      {
        title:
          'Please note that the Payment Processors may collect some Personal Information from you, which allows them to process your payments (e.g., your email address, address, credit card details, and bank account number) and handle all the steps in the payment process through their systems, including data collection and data processing. The Payment Processors’ use of your Personal Information is governed by their respective privacy policies which may or may not contain privacy protections as protective as this Policy. We suggest that you review their respective privacy policies.',
      },
    ],
  },
  {
    title: 'MANAGING INFORMATION',
    sublist: [
      {
        title:
          'You are able to delete certain Personal Information we have about you. The Personal Information you can delete may change as the Website and Services change. When you delete Personal Information, however, we may maintain a copy of the unrevised Personal Information in our records for the duration necessary to comply with our obligations to our affiliates and partners, and for the purposes described below.',
      },
    ],
  },
  {
    title: 'DISCLOSURE OF INFORMATION',
    sublist: [
      {
        title:
          'Depending on the requested Services or as necessary to complete any transaction or provide any Service you have requested, we may share your information with our affiliates, contracted companies, and service providers (collectively, “Service Providers”) we rely upon to assist in the operation of the Website and Services available to you and whose privacy policies are consistent with ours or who agree to abide by our policies with respect to Personal Information. We will not share any information with unaffiliated third parties.',
      },
      {
        title:
          'Service Providers are not authorized to use or disclose your information except as necessary to perform services on our behalf or comply with legal requirements. Service Providers are given the information they need only in order to perform their designated functions, and we do not authorize them to use or disclose any of the provided information for their own marketing or other purposes. We will share and disclose your information only with the following categories of Service Providers:',
        sublist: ['Affiliate programs', 'Website hosting service providers.'],
      },
      {
        title:
          'We may also disclose any Personal Information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.',
      },
    ],
  },
  {
    title: 'RETENTION OF INFORMATION',
    sublist: [
      {
        title:
          'We will retain and use your Personal Information for the period necessary to comply with our legal obligations, to enforce our Policy, resolve disputes, and unless a longer retention period is required or permitted by law.',
      },
      {
        title:
          'We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification, and the right to data portability cannot be enforced after the expiration of the retention period.',
      },
    ],
  },
  {
    title: 'TRANSFER OF INFORMATION',
    sublist: [
      {
        title:
          'Depending on your location, data transfers may involve transferring and storing your information in a country other than your own, including United Arab Emirates. The transfer of your Personal Information to countries outside the European Union will be made only if you have explicitly consented to it or in the cases provided for by the GDPR and will be processed in your interest.',
      },
      {
        title:
          'You are entitled to learn about the legal basis of information transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by us to safeguard your information. If any such transfer takes place, you can find out more by checking the relevant sections of this Policy or inquire with us using the information provided in the contact section.',
      },
    ],
  },
  {
    title: 'DATA PROTECTION RIGHTS UNDER THE GDPR',
    sublist: [
      {
        title:
          'If you are a resident of the European Economic Area (“EEA”), you have certain data protection rights and we aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us. In certain circumstances, you have the following data protection rights:',
        list: [
          'You have the right to withdraw consent where you have previously given your consent to the processing of your Personal Information. To the extent that the legal basis for our processing of your Personal Information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal.',
          'You have the right to learn if your Personal Information is being processed by us, obtain disclosure regarding certain aspects of the processing, and obtain a copy of your Personal Information undergoing processing.',
          'You have the right to verify the accuracy of your information and ask for it to be updated or corrected. You also have the right to request us to complete the Personal Information you believe is incomplete.',
          'You have the right to object to the processing of your information if the processing is carried out on a legal basis other than consent. Where Personal Information is processed for the public interest, in the exercise of an official authority vested in us, or for the purposes of the legitimate interests pursued by us, you may object to such processing by providing a ground related to your particular situation to justify the objection. You must know that, however, should your Personal Information be processed for direct marketing purposes, you can object to that processing at any time without providing any justification. To learn whether we are processing Personal Information for direct marketing purposes, you may refer to the relevant sections of this Policy.',
          'You have the right, under certain circumstances, to restrict the processing of your Personal Information. These circumstances include: the accuracy of your Personal Information is contested by you and we must verify its accuracy; the processing is unlawful, but you oppose the erasure of your Personal Information and request the restriction of its use instead; we no longer need your Personal Information for the purposes of processing, but you require it to establish, exercise or defend your legal claims; you have objected to processing pending the verification of whether our legitimate grounds override your legitimate grounds. Where processing has been restricted, such Personal Information will be marked accordingly and, with the exception of storage, will be processed only with your consent or for the establishment, to exercise or defense of legal claims, for the protection of the rights of another natural, or legal person or for reasons of important public interest.',
          'You have the right, under certain circumstances, to obtain the erasure of your Personal Information from us. These circumstances include: the Personal Information is no longer necessary in relation to the purposes for which it was collected or otherwise processed; you withdraw consent to consent-based processing; you object to the processing under certain rules of applicable data protection law; the processing is for direct marketing purposes; and the personal data have been unlawfully processed. However, there are exclusions of the right to erasure such as where processing is necessary: for exercising the right of freedom of expression and information; for compliance with a legal obligation; or for the establishment, to exercise or defense of legal claims.',
          'You have the right to receive your Personal Information that you have provided to us in a structured, commonly used, and machine-readable format and, if technically feasible, to have it transmitted to another controller without any hindrance from us, provided that such transmission does not adversely affect the rights and freedoms of others.',
          'You have the right to complain to a data protection authority about our collection and use of your Personal Information. If you are not satisfied with the outcome of your complaint directly with us, you have the right to lodge a complaint with your local data protection authority. For more information, please contact your local data protection authority in the EEA. This provision is applicable provided that your Personal Information is processed by automated means and that the processing is based on your consent, on a contract which you are part of, or on pre-contractual obligations thereof.',
        ],
      },
    ],
  },
  {
    title: 'CALIFORNIA PRIVACY RIGHTS',
    sublist: [
      {
        title:
          'Consumers residing in California are afforded certain additional rights with respect to their Personal Information under the California Consumer Privacy Act (“CCPA”). If you are a California resident, this section applies to you.',
      },
      {
        title:
          'In addition to the rights as explained in this Policy, California residents who provide Personal Information as defined in the statute to obtain Services for personal, family, or household use are entitled to request and obtain from us, once a calendar year, information about the categories and specific pieces of Personal Information we have collected and disclosed.',
      },
      {
        title:
          'Furthermore, California residents have the right to request deletion of their Personal Information or opt-out of the sale of their Personal Information which may include selling, disclosing, or transferring Personal Information to another business or a third party for monetary or other valuable consideration. To do so, simply contact us. We will not discriminate against you if you exercise your rights under the CCPA.',
      },
    ],
  },
  {
    title: 'HOW TO EXERCISE YOUR RIGHTS',
    sublist: [
      {
        title:
          'Any requests to exercise your rights can be directed to us through the contact details provided in this document. Please note that we may ask you to verify your identity before responding to such requests. Your request must provide sufficient information that allows us to verify that you are the person you are claiming to be or that you are the authorized representative of such person. If we receive your request from an authorized representative, we may request evidence that you have provided such an authorized representative with power of attorney or that the authorized representative otherwise has valid written authority to submit requests on your behalf.',
      },
      {
        title:
          'You must include sufficient details to allow us to properly understand the request and respond to it. We cannot respond to your request or provide you with Personal Information unless we first verify your identity or authority to make such a request and confirm that the Personal Information relates to you.',
      },
    ],
  },
  {
    title: 'DO NOT TRACK SIGNALS',
    sublist: [
      {
        title:
          'Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. How browsers communicate the Do Not Track signal is not yet uniform. As a result, the Website and Services are not yet set up to interpret or respond to Do Not Track signals communicated by your browser. Even so, as described in more detail throughout this Policy, we limit our use and collection of your Personal Information. For a description of Do Not Track protocols for browsers and mobile devices or to learn more about the choices available to you, visit internetcookies.com ',
      },
    ],
  },
  {
    title: 'ADVERTISEMENTS',
    sublist: [
      {
        title:
          'We may permit certain third-party companies to help us tailor advertising that we think may be of interest to Users and to collect and use other data about User activities on the Website. These companies may deliver ads that might place cookies and otherwise track User behavior.',
      },
    ],
  },
  {
    title: 'EMAIL MARKETING',
    sublist: [
      {
        title:
          'We offer electronic newsletters to which you may voluntarily subscribe at any time. We are committed to keeping your e-mail address confidential and will not disclose your email address to any third parties except as allowed in the information use and processing section. We will maintain the information sent via e-mail in accordance with applicable laws and regulations.',
      },
      {
        title:
          'In compliance with the CAN-SPAM Act, all e-mails sent from us will clearly state who the e-mail is from and provide clear information on how to contact the sender. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us. However, you will continue to receive essential transactional emails.',
      },
    ],
  },
  {
    title: 'LINKS TO OTHER RESOURCES',
    sublist: [
      {
        title:
          'The Website and Services contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties. We encourage you to be aware when you leave the Website and Services and to read the privacy statements of each and every resource that may collect Personal Information.',
      },
    ],
  },
  {
    title: 'INFORMATION SECURITY',
    sublist: [
      {
        title:
          'We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.',
      },
      {
        title:
          'Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and the Website and Services cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third party, despite best efforts.',
      },
      {
        title:
          'As the security of Personal Information depends in part on the security of the device you use to communicate with us and the security you use to protect your credentials, please take appropriate measures to protect this information.',
      },
    ],
  },
  {
    title: 'DATA BREACH',
    sublist: [
      {
        title:
          'In the event we become aware that the security of the Website and Services has been compromised or Users’ Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the User as a result of the breach or if notice is otherwise required by law. When we do, we will send you an email.',
      },
    ],
  },
  {
    title: 'CHANGES AND AMENDMENTS',
    sublist: [
      {
        title:
          'We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page, post a notification on the main page of the Website. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.',
      },
      {
        title:
          'An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Information in a manner materially different than what was stated at the time your Personal Information was collected.',
      },
    ],
  },
  {
    title: 'ACCEPTANCE OF THIS POLICY',
    sublist: [
      {
        title:
          'You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services and submitting your information you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services.',
      },
    ],
  },
  {
    title: 'CONTACTING US',
    sublist: [
      {
        title:
          'If you have any questions regarding the information we may hold about you or if you wish to exercise your rights, we encourage you to contact us using the details below: evis@nirvanatls.com',
      },
      {
        title:
          'We will attempt to resolve complaints and disputes and make every reasonable effort to honor your wish to exercise your rights as quickly as possible and in any event, within the timescales provided by applicable data protection laws.',
      },
    ],
  },
];

export const contactInfo = [
  {
    title: 'General enquiry',
    url: 'mailto:sts@nirvanamice.com',
    // info: 'sts@nirvanamice.com',
  },
  {
    title: 'Exhibition & sponsorship inquiries',
    url: 'mailto:sts.sales@nirvanamice.com',
    // info: 'sts.sales@nirvanamice.com',
  },
  {
    title: 'Conference & delegates inquiries',
    url: 'mailto:sts.delegate@nirvanamice.com',
    // info: 'sts.delegate@nirvanamice.com',
  },
  {
    title: 'Marketing & media inquiries',
    url: 'mailto:sts.marketing@nirvanamice.com',
    // info: 'sts.marketing@nirvanamice.com',
  },
  {
    title: 'Operations inquiries',
    url: 'mailto:sts.operations@nirvanamice.com',
    // info: 'sts.operations@nirvanamice.com',
  },
  {
    title: 'Visa & Ticketing inquiries',
    url: 'mailto:sts.travel@nirvanamice.com',
    // info: 'sts.travel@nirvanamice.com',
  },
  {
    title: 'Call Us',
    url: 'tel:+97123043333',
    // info: '+971 2 304 3333',
  },
];

export const ourVision = [
  {
    Icon: StarsIcon,
    title: 'Norem ipsum dolor ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum aesent aenim egestas, ac scelerisque ante pulvinar. Donec .',
  },
  {
    Icon: RocketIcon,
    title: 'Norem ipsum dolor ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum aesent aenim egestas, ac scelerisque ante pulvinar. Donec .',
  },
  {
    Icon: AgentIcon,
    title: 'Norem ipsum dolor ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum aesent aenim egestas, ac scelerisque ante pulvinar. Donec .',
  },
];

export const whyExhibit = [
  {
    Icon: networkIcon,
    title: 'Visibility and Networking',
    description:
      'Participating in the Space Travel Summit provides companies with a unique platform to enhance their visibility within the space industry.',
  },
  {
    Icon: exhibitionInnovation,
    title: 'Showcasing Innovations',
    description:
      'Exhibiting at the summit enables companies to showcase their cutting-edge technologies, products, and services in the field of space travel.',
  },
  {
    Icon: knowledgeExchange,
    title: 'Industry Insights and Knowledge Exchange',
    description:
      'The summit serves as a hub for industry insights, where companies / individuals can gain valuable knowledge about the latest trends, advancements, and regulatory changes in space travel.',
  },
  {
    Icon: brandAuthority,
    title: 'Brand Authority and Credibility',
    description:
      "Being part of the Space Travel Summit boosts a company's credibility and establishes it as a serious player in the space exploration arena.",
  },
];

export const whySponsor = [
  {
    Icon: RocketIcon,
    title: 'Norem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum aesent aenim egestas, ac scelerisque ante pulvinar. Donec.',
  },
  {
    Icon: RocketIcon,
    title: 'Norem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum aesent aenim egestas, ac scelerisque ante pulvinar. Donec.',
  },
  {
    Icon: RocketIcon,
    title: 'Norem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum aesent aenim egestas, ac scelerisque ante pulvinar. Donec.',
  },
  {
    Icon: RocketIcon,
    title: 'Norem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum aesent aenim egestas, ac scelerisque ante pulvinar. Donec.',
  },
];

export const conferenceTracks = [
  {
    track: 'Space Travel in National Space Programs',
    bg: 'bg-national-program-bg',
    topics: [
      {
        icon: visionToStrategyIcon,
        title: 'Vision to Strategies',
        description:
          'Space programs start with a nation’s dream to grow, explore, and expand to the horizon of knowledge, curiosity, and making on earth and beyond.',
      },
      {
        icon: spaceInfrastructureIcon,
        title: 'Infrastructure & Operations',
        description:
          'A strategy in place is limited by infrastructure readiness for implementation and capabilities to sustain successful operations. This track aims at bringing your assets to life.',
      },
      {
        icon: partnershipIcon,
        title: 'Public-Private Partnership',
        description:
          'With emerging opportunities, collaboration between private sector innovation and public sector implementation capabilities is key to sustainable growth.',
      },
    ],
  },
  {
    track: 'Industry Growth & Ecosystem Expansion',
    bg: 'bg-industry-growth-bg',
    topics: [
      {
        icon: spaceTravelIcon,
        title: 'Commercial Space Travel / Tourism',
        description:
          'Less expensive and more accessible space transport is leading to a growth in profitability behind space travel. Thus, the STS community is the opening gate of limitless potential.',
      },
      {
        icon: trendingTechnologiesIcon,
        title: 'Key Trending Technologies',
        description:
          'Bringing space suborbital flights, make in space, experience design, innovation in infrastructure and more insights on the key technologies driving the future of the space economy.',
      },
      {
        icon: startupIcon,
        title: 'Startup Ecosystem',
        description:
          'Space industry is a complex ecosystem. STS aims to sustain private sector share of the market growth by empowering innovative space startups with unique value proposition.',
      },
    ],
  },
  {
    track: 'Commercial Space Activities: Challenges & Opportunities',
    bg: 'bg-commercial-activities-bg',
    topics: [
      {
        icon: spaceAccessibilityIcon,
        title: 'Space Accessibility & Inclusivity',
        description:
          'Can we all become part of our own universal dream? Let’s discuss the factors affecting access to space and how to build an inclusive space economy.',
      },
      {
        icon: resourcesUtilizationIcon,
        title: 'Space Resources Utilization',
        description:
          'Strategic planning aims at optimizing the use of resources in a sustainable manner that can drive efficient operations. This track shall explore the various utilization techniques.',
      },
      {
        icon: spaceInnovationIcon,
        title: 'Innovation in Space Travel',
        description:
          'What’s the next big thing? The answers are unlimited to technologies, resources and strategies. Let’s uncover the standards and expectations!',
      },
    ],
  },
];

export const planVisit = [
  {
    image: visa,
    title: 'Visa Requirements',
    description:
      "Understanding and meeting the visa requirements is a crucial step in ensuring your seamless participation in STS 2025. In this section, you'll find comprehensive information on the specific visa types applicable to your visit, along with a detailed guide on the application process. We'll also assist you in gathering the necessary supporting documents and provide links to official government resources, making your visa application process as smooth as possible.",
    btn: {
      title: 'Check Visa Requirements',
      url: 'https://www.abudhabiairport.ae/en/passenger-guide/transit/visa-requirements',
    },
  },
  {
    image: flight,
    title: 'Book Your Flight & Hotel',
    description:
      "We've made travel planning stress-free for your visit to STS 2025. Discover convenient flight options, recommended nearby hotels, and time-saving travel packages. Secure the best deals for flights and accommodations with ease.",
    btn: {
      title: 'Inquire Here',
      url: 'https://ntravel.ae/',
    },
  },
  {
    image: experience,
    title: 'Explore Local Attractions',
    description:
      "Your visit to STS 2025 is more than just the event itself, it's an opportunity to immerse yourself in the local culture and attractions. Explore the region's unique cuisine, attend cultural events, and discover landmarks and museums. Opt for guided tours and excursions to delve into the local culture and natural beauty. Extend your stay to enjoy pre and post-event activities, making the most of your time in the region.",
    btn: {
      title: 'Explore Attractions',
      url: 'https://www.tripadvisor.com/',
    },
  },
];
