const questions = [
  /* Category 1 Questions */
  {
    prompt: 'What is the cloud-based service provided by Microsoft for collaborating on code development?',
    options: ['VS Code', 'Azure DevOps Services', 'Visual Studio'],
    correctAnswer: 'Azure DevOps Services',
    cashPrize: 10
  },
  {
    prompt: 'What is the on-premises version of Azure DevOps called?',
    options: ['Azure Dev Server', 'Azure DevOps Services', 'Azure DevOps Server'],
    correctAnswer: 'Azure DevOps Server',
    cashPrize: 50
  },
  {
    prompt: 'What Azure DevOps feature helps automate and manage the build process for your projects?',
    options: ['Azure Artifacts', 'Azure Pipelines', 'Azure Boards'],
    correctAnswer: 'Azure Pipelines',
    cashPrize: 100
  },
  {
    prompt: 'What is the built-in tool for managing work items, backlogs, and planning sprints in Azure DevOps?',
    options: ['Jira', 'Azure Boards', 'Trello'],
    correctAnswer: 'Azure Boards',
    cashPrize: 500
  },
  {
    prompt: 'What Azure DevOps feature provides version control and code collaboration capabilities?',
    options: ['CVS', 'Subversion', 'Azure Repos'],
    correctAnswer: 'Azure Repos',
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is the practice of merging developers working copies to a shared mainline several times a day called?',
    options: ['Continuous Integration (CI)', 'Continuous Delivery (CD)', 'Continuous Deployment (CD)', 'Pull request (PR)'],
    correctAnswer: 'Continuous Integration (CI)',
    cashPrize: 10
  },
  {
    prompt: 'What is the practice of releasing features to applications automatically and seamlessly called?',
    options: ['Deploy', 'Continuous Deployment (CD)', 'Continuous Integration (CI)', 'Continuous Delivery (CD)'],
    correctAnswer: 'Continuous Deployment (CD)',
    cashPrize: 50
  },
  {
    prompt: 'What is the process of packaging and distributing application code, libraries, and dependencies called?',
    options: ['Release Management', 'Artifacts', 'Build', 'Zip file'],
    correctAnswer: 'Release Management',
    cashPrize: 100
  },
  {
    prompt: 'What Azure Pipelines feature allows you to define a sequence of tasks to be executed in a specific order?',
    options: ['Agents', 'Stages', 'Jobs', 'Trigger'],
    correctAnswer: 'Stages',
    cashPrize: 500
  },
  {
    prompt: 'What is the collection of files or packages produced during the build process and consumed for the release pipeline?',
    options: ['YAML files', '*.exe', '*.zip', 'Artifacts'],
    correctAnswer: 'Artifacts',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'What is the practice of using version-controlled code to automate infrastructure provisioning and management called?',
    options: ['Azure Resource Manager (ARM) templates', 'CloudFormation', 'Docker', 'Lambda'],
    correctAnswer: 'Azure Resource Manager (ARM) templates',
    cashPrize: 10
  },
  {
    prompt: 'What open-source, third party tool, often used with Azure and other cloud providers, allows users to define and manage infrastructure using a declarative configuration language?',
    options: ['Azure CLI', 'Terraform', 'Bicep', 'Azure Resource Manager (ARM) templates'],
    correctAnswer: 'Terraform',
    cashPrize: 50
  },
  {
    prompt: 'What is the practice of using version-controlled code to automate infrastructure provisioning and management called?',
    options: ['Infrastructure as Code (IaC)', 'Terraform', 'command-line interface (CLI)', 'Ansible'],
    correctAnswer: 'Infrastructure as Code (IaC)',
    cashPrize: 100
  },
  {
    prompt: 'What allows you to manage and maintain the configuration of your Azure virtual machines (VMs) and on-premises servers while helping being protected against configuration drift?',
    options: ['PowerShell', 'Azure DSC', 'Azure Automation', 'Runbooks'],
    correctAnswer: 'Azure DSC',
    cashPrize: 500
  },
  {
    prompt: 'What Azure resource is a logical container that holds related resources for an application or a solution?',
    options: ['Azure Resource Groups', 'Subscription', 'Azure virtual machines (VMs)', 'Azure Cloud Shell'],
    correctAnswer: 'Azure Resource Groups',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'What Azure service provides a comprehensive solution for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments?',
    options: ['Azure Application Insights', 'Azure Monitor', 'Azure CloudWatch', 'Azure Cloud Monitoring'],
    correctAnswer: 'Azure Monitor',
    cashPrize: 10
  },
  {
    prompt: 'What Azure service helps you detect and diagnose issues across applications and dependencies in real-time?',
    options: ['Azure APM', 'Azure CloudWatch Application Insights', 'Stackdriver Monitoring', 'Application Insights'],
    correctAnswer: 'Application Insights',
    cashPrize: 50
  },
  {
    prompt: 'What is the process of continuously measuring and monitoring the quality and performance of a software application called?',
    options: ['Stackdriver Profiler', 'Application Performance Monitoring (APM)', 'Azure Monitor', 'Azure Test Plans'],
    correctAnswer: 'Application Performance Monitoring (APM)',
    cashPrize: 100
  },
  {
    prompt: 'What Azure service provides a scalable, multi-cloud, and multi-framework log analytics solution for your applications?',
    options: ['Azure CloudWatch Logs', 'Azure Logs', 'Azure Log Analytics', 'Azure Cloud Logging'],
    correctAnswer: 'Azure Log Analytics',
    cashPrize: 500
  },
  {
    prompt: 'What is a discipline that combines aspects of software engineering and systems engineering to build and maintain large-scale, highly reliable, and efficient systems?',
    options: ['CSM', 'Operation', 'Support', 'Site Reliability Engineering (SRE)'],
    correctAnswer: 'Site Reliability Engineering (SRE)',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'What Azure feature allows you to manage and control access to resources using role-based access control (RBAC)?',
    options: ['Microsoft Active Directory', 'Azure Active Directory (Azure AD)', 'Azure IAM', 'Azure Directory Service'],
    correctAnswer: 'Azure Active Directory (Azure AD)',
    cashPrize: 10
  },
  {
    prompt: 'What is the term for a set of rules and principles that define the security and compliance requirements for a specific application or organization?',
    options: ['Security and Compliance Policy', 'Business process', 'Software development lifecycle (SDLC)', 'User interface (UI)'],
    correctAnswer: 'Security and Compliance Policy',
    cashPrize: 50
  },
  {
    prompt: 'What Azure service helps you identify potential vulnerabilities in your code and provides recommendations for addressing them?',
    options: ['Azure Pipelines', 'Release Pipelines', 'Azure DevOps Security Code Analysis', 'Azure Defender'],
    correctAnswer: 'Azure DevOps Security Code Analysis',
    cashPrize: 100
  },
  {
    prompt: 'What is a feature of Azure Active Directory (Azure AD) that automatically creates and manages an identity for an Azure resource?',
    options: ['System-assigned managed identity', 'Azure Policy', 'Azure RBAC', 'Azure initiative'],
    correctAnswer: 'System-assigned managed identity',
    cashPrize: 500
  },
  {
    prompt: 'What is a type of managed identity in Azure Active Directory (Azure AD) that allows you to create and manage an identity for use by multiple Azure resources?',
    options: ['Group-assigned managed identity', 'Policy-assigned managed identity', 'System-assigned managed identity', 'User-assigned managed identity'],
    correctAnswer: 'User-assigned managed identity',
    cashPrize: 1000
  },
  /* Category 6 Questions */
  {
    prompt: 'What are the two types of version control systems supported by Azure Repos?',
    options: ['Subversion and CVS', 'Git and Team Foundation Version Control (TFVC)', 'Git and Mercurial', 'Git and Web Team Foundation Version Control (WTFVC)'],
    correctAnswer: 'Git and Team Foundation Version Control (TFVC)',
    cashPrize: 10
  },
  {
    prompt: 'What is the decentralized version control system used for tracking changes in source code during software development, which is supported by Azure Repos?',
    options: ['Git', 'TFVC', 'Subversion', 'Mercurial'],
    correctAnswer: 'Git',
    cashPrize: 50
  },
  {
    prompt: 'In Git, what is the term for the action of downloading a remote repository to a local development environment?',
    options: ['git clone', 'git copy', 'git fetch', 'git download'],
    correctAnswer: 'git clone',
    cashPrize: 100
  },
  {
    prompt: 'In Azure Repos, what is the collaborative process of reviewing and discussing code changes before merging them into the main branch called?',
    options: ['Code reviews', 'Pull requests (PR)', 'Code chat', 'Code search'],
    correctAnswer: 'Pull requests (PR)',
    cashPrize: 500
  },
  {
    prompt: 'What is a personal copy of someone else Git repository?',
    options: ['fork', 'clone', 'fetch', 'download'],
    correctAnswer: 'fork',
    cashPrize: 1000
  }
];

export default questions;