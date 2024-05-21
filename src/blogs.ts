export const ai = {
  title: "Introduction to Machine Learning",
  id: 1,
  coverImage:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  content: `This is the first of the series of our work at Netflix on leveraging data insights and Machine Learning (ML) to improve the operational automation around the performance and cost efficiency of big data jobs. Operational automation–including but not limited to, auto diagnosis, auto remediation, auto configuration, auto tuning, auto scaling, auto debugging, and auto testing–is key to the success of modern data platforms. In this blog post, we present our project on Auto Remediation, which integrates the currently used rule-based classifier with an ML service and aims to automatically remediate failed jobs without human intervention. We have deployed Auto Remediation in production for handling memory configuration errors and unclassified errors of Spark jobs and observed its efficiency and effectiveness (e.g., automatically remediating 56% of memory configuration errors and saving 50% of the monetary costs caused by all errors) and great potential for further improvements.

Introduction
At Netflix, hundreds of thousands of workflows and millions of jobs are running per day across multiple layers of the big data platform. Given the extensive scope and intricate complexity inherent to such a distributed, large-scale system, even if the failed jobs account for a tiny portion of the total workload, diagnosing and remediating job failures can cause considerable operational burdens.

For efficient error handling, Netflix developed an error classification service, called Pensive, which leverages a rule-based classifier for error classification. The rule-based classifier classifies job errors based on a set of predefined rules and provides insights for schedulers to decide whether to retry the job and for engineers to diagnose and remediate the job failure.

However, as the system has increased in scale and complexity, the rule-based classifier has been facing challenges due to its limited support for operational automation, especially for handling memory configuration errors and unclassified errors. Therefore, the operational cost increases linearly with the number of failed jobs. In some cases–for example, diagnosing and remediating job failures caused by Out-Of-Memory (OOM) errors–joint effort across teams is required, involving not only the users themselves, but also the support engineers and domain experts.

To address these challenges, we have developed a new feature, called Auto Remediation, which integrates the rule-based classifier with an ML service. Based on the classification from the rule-based classifier, it uses an ML service to predict retry success probability and retry cost and selects the best candidate configuration as recommendations; and a configuration service to automatically apply the recommendations. Its major advantages are below:

Integrated intelligence. Instead of completely deprecating the current rule-based classifier, Auto Remediation integrates the classifier with an ML service so that it can leverage the merits of both: the rule-based classifier provides static, deterministic classification results per error class, which is based on the context of domain experts; the ML service provides performance- and cost-aware recommendations per job, which leverages the power of ML. With the integrated intelligence, we can properly meet the requirements of remediating different errors.
Fully automated. The pipeline of classifying errors, getting recommendations, and applying recommendations is fully automated. It provides the recommendations together with the retry decision to the scheduler, and particularly uses an online configuration service to store and apply recommended configurations. In this way, no human intervention is required in the remediation process.
Multi-objective optimizations. Auto Remediation generates recommendations by considering both performance (i.e., the retry success probability) and compute cost efficiency (i.e., the monetary costs of running the job) to avoid blindly recommending configurations with excessive resource consumption. For example, for memory configuration errors, it searches multiple parameters related to the memory usage of job execution and recommends the combination that minimizes a linear combination of failure probability and compute cost.`,
  authorId: 1,
  discussions: [
    {
      content: "Great blog post! Thanks for sharing.",
      authorId: 2,
      likes: [3],
    },
    {
      content:
        "I found this topic very interesting. Can you elaborate more on XYZ?",
      authorId: 3,
      likes: [4],
    },
  ],
};

export const health = {
  title: "Maintaining a Healthy Lifestyle",
  id: 2,
  coverImage:
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  content: `I had my annual physical at the doctor’s a few days ago– I went to a new doctor because I didn’t like my old one (Note: Yes, if you don’t like your doctor you should switch! They are providing a service, and especially when it comes to your health, you should be working with individuals that care for you, and that you trust).

She was asking me a few routine questions about my lifestyle habits, and the topic of drinking came up. I told her I didn’t drink much and she was like, good! Less is better.

“If you hear that alcohol is good for your health, it’s probably the social aspects of drinking, not the drink itself. Drink with people, but I don’t encourage you to drink with people.”`,
  authorId: 1,
  discussions: [
    {
      content: "This blog post has some great tips! Thanks for sharing.",
      authorId: 2,
      likes: [3],
    },
    {
      content:
        "I have a question regarding nutrition. Can you provide some advice?",
      authorId: 4,
      likes: [5],
    },
  ],
};
