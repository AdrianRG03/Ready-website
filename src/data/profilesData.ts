export type ProfileTask = {
  title: { es: string; en: string }
  desc: { es: string; en: string }
}

export type Profile = {
  slug: string
  name: { es: string; en: string }
  heroTitle: { es: string; en: string }
  heroSubtitle: { es: string; en: string }
  description: { es: string; en: string }
  tasks: ProfileTask[]
}

export type Category = {
  slug: string
  name: { es: string; en: string }
  defaultProfile: string
  profiles: Profile[]
}

export const CATEGORIES: Category[] = [
  {
    slug: 'ia-automatizacion',
    name: {
      es: 'IA & Automatización',
      en: 'AI & Automation',
    },
    defaultProfile: 'ai-product-manager',
    profiles: [
      {
        slug: 'ai-product-manager',
        name: {
          es: 'AI Product Manager',
          en: 'AI Product Manager',
        },
        heroTitle: {
          es: 'Contrata un AI Product Manager para liderar productos con inteligencia artificial',
          en: 'Hire an AI Product Manager to lead products powered by artificial intelligence',
        },
        heroSubtitle: {
          es: 'Define estrategia, prioriza casos de uso y maximiza el impacto de IA en el negocio',
          en: 'Define strategy, prioritize use cases and maximize AI impact on the business',
        },
        description: {
          es: 'Un AI Product Manager lidera el desarrollo de productos digitales impulsados por inteligencia artificial, actuando como puente entre los equipos técnicos y los objetivos estratégicos del negocio. No solo define qué se construye, sino que asegura que cada decisión de producto esté alineada con el valor real que la IA puede entregar a usuarios y organizaciones.',
          en: 'An AI Product Manager leads the development of digital products powered by artificial intelligence, acting as a bridge between technical teams and the strategic objectives of the business. They not only define what gets built, but ensure that every product decision is aligned with the real value AI can deliver to users and organizations.',
        },
        tasks: [
          {
            title: {
              es: 'Define la visión del producto de IA',
              en: 'Define the AI product vision',
            },
            desc: {
              es: 'Traduce necesidades de negocio en requerimientos funcionales para soluciones de inteligencia artificial.',
              en: 'Translates business needs into functional requirements for artificial intelligence solutions.',
            },
          },
          {
            title: {
              es: 'Gestiona el roadmap de producto',
              en: 'Manage the product roadmap',
            },
            desc: {
              es: 'Prioriza funcionalidades y coordina equipos técnicos y de negocio en ciclos ágiles.',
              en: 'Prioritizes features and coordinates technical and business teams in agile cycles.',
            },
          },
          {
            title: {
              es: 'Valida hipótesis con datos',
              en: 'Validate hypotheses with data',
            },
            desc: {
              es: 'Define métricas de éxito, interpreta resultados y toma decisiones basadas en evidencia.',
              en: 'Defines success metrics, interprets results and makes evidence-based decisions.',
            },
          },
          {
            title: {
              es: 'Facilita la adopción interna',
              en: 'Facilitate internal adoption',
            },
            desc: {
              es: 'Acompaña el cambio organizacional asegurando que los equipos adopten las soluciones de IA desarrolladas.',
              en: 'Supports organizational change by ensuring teams adopt the developed AI solutions.',
            },
          },
        ],
      },
      {
        slug: 'ai-agent-developer',
        name: {
          es: 'AI Agent Developer',
          en: 'AI Agent Developer',
        },
        heroTitle: {
          es: 'Contrata un AI Agent Developer para automatizar operaciones con agentes inteligentes',
          en: 'Hire an AI Agent Developer to automate operations with intelligent agents',
        },
        heroSubtitle: {
          es: 'Construye agentes capaces de planificar tareas, usar herramientas y ejecutar flujos end-to-end',
          en: 'Build agents capable of planning tasks, using tools and executing end-to-end workflows',
        },
        description: {
          es: 'Un IA Agent Developer diseña y construye sistemas de agentes autónomos capaces de percibir su entorno, tomar decisiones y ejecutar tareas complejas con mínima intervención humana. Va más allá del desarrollo tradicional: combina ingeniería de software con comprensión profunda de modelos de lenguaje, orquestación de agentes y arquitecturas de razonamiento.',
          en: 'An AI Agent Developer designs and builds autonomous agent systems capable of perceiving their environment, making decisions and executing complex tasks with minimal human intervention. It goes beyond traditional development: combining software engineering with a deep understanding of language models, agent orchestration and reasoning architectures.',
        },
        tasks: [
          {
            title: {
              es: 'Diseña y construye agentes autónomos',
              en: 'Design and build autonomous agents',
            },
            desc: {
              es: 'Crea sistemas de IA capaces de planificar, razonar y ejecutar tareas de forma independiente.',
              en: 'Creates AI systems capable of planning, reasoning and executing tasks independently.',
            },
          },
          {
            title: {
              es: 'Integra herramientas y fuentes de datos',
              en: 'Integrate tools and data sources',
            },
            desc: {
              es: 'Conecta los agentes con APIs, bases de datos y sistemas externos para ampliar sus capacidades.',
              en: 'Connects agents with APIs, databases and external systems to extend their capabilities.',
            },
          },
          {
            title: {
              es: 'Orquesta flujos multi-agente',
              en: 'Orchestrate multi-agent workflows',
            },
            desc: {
              es: 'Coordina la colaboración entre múltiples agentes para resolver problemas complejos de negocio.',
              en: 'Coordinates collaboration between multiple agents to solve complex business problems.',
            },
          },
          {
            title: {
              es: 'Optimiza confiabilidad y seguridad',
              en: 'Optimize reliability and safety',
            },
            desc: {
              es: 'Implementa mecanismos de supervisión, evaluación y control para garantizar comportamientos predecibles.',
              en: 'Implements supervision, evaluation and control mechanisms to ensure predictable behaviors.',
            },
          },
        ],
      },
      {
        slug: 'llm-engineer',
        name: {
          es: 'LLM Engineer',
          en: 'LLM Engineer',
        },
        heroTitle: {
          es: 'Contrata un LLM Engineer para crear productos con modelos de lenguaje',
          en: 'Hire an LLM Engineer to build products with language models',
        },
        heroSubtitle: {
          es: 'Diseña, evalúa y optimiza soluciones con modelos fundacionales para casos de negocio reales',
          en: 'Design, evaluate and optimize solutions with foundation models for real business use cases',
        },
        description: {
          es: 'Un LLM Engineer especializa en el desarrollo, ajuste y despliegue de grandes modelos de lenguaje para aplicaciones empresariales. Domina tanto la ingeniería de software como los fundamentos técnicos de los modelos de lenguaje. No solo consume modelos existentes, sino que los evalúa, optimiza y adapta para que respondan con precisión y consistencia a los requerimientos específicos de cada negocio.',
          en: 'An LLM Engineer specializes in the development, fine-tuning and deployment of large language models for enterprise applications. They master both software engineering and the technical foundations of language models. They not only consume existing models, but evaluate, optimize and adapt them so they respond accurately and consistently to each business\'s specific requirements.',
        },
        tasks: [
          {
            title: {
              es: 'Diseña pipelines de procesamiento de lenguaje',
              en: 'Design language processing pipelines',
            },
            desc: {
              es: 'Construye flujos de ingesta, transformación y consulta de datos textuales para alimentar modelos de lenguaje.',
              en: 'Builds ingestion, transformation and query workflows for textual data to feed language models.',
            },
          },
          {
            title: {
              es: 'Implementa técnicas de RAG y fine-tuning',
              en: 'Implement RAG and fine-tuning techniques',
            },
            desc: {
              es: 'Combina retrieval-augmented generation y ajuste fino para mejorar la precisión de los modelos en dominios específicos.',
              en: 'Combines retrieval-augmented generation and fine-tuning to improve model accuracy in specific domains.',
            },
          },
          {
            title: {
              es: 'Evalúa y benchmarkea modelos',
              en: 'Evaluate and benchmark models',
            },
            desc: {
              es: 'Diseña pruebas sistemáticas para medir calidad, consistencia y seguridad de las respuestas generadas.',
              en: 'Designs systematic tests to measure quality, consistency and safety of generated responses.',
            },
          },
          {
            title: {
              es: 'Optimiza costos y latencia',
              en: 'Optimize costs and latency',
            },
            desc: {
              es: 'Selecciona modelos, estrategias de caché y configuraciones de inferencia para balancear rendimiento y eficiencia operacional.',
              en: 'Selects models, caching strategies and inference configurations to balance performance and operational efficiency.',
            },
          },
        ],
      },
      {
        slug: 'generative-ai-engineer',
        name: {
          es: 'Generative AI Engineer',
          en: 'Generative AI Engineer',
        },
        heroTitle: {
          es: 'Contrata un Generative AI Engineer para crear soluciones con IA generativa',
          en: 'Hire a Generative AI Engineer to build solutions with generative AI',
        },
        heroSubtitle: {
          es: 'Desarrolla aplicaciones basadas en modelos que generan texto, imágenes, audio o video',
          en: 'Develop applications based on models that generate text, images, audio or video',
        },
        description: {
          es: 'Un Generative AI Engineer desarrolla aplicaciones basadas en modelos capaces de crear contenido nuevo como texto, imágenes, audio o video. No solo consume modelos preexistentes, sino que también los adapta, entrena o integra con datos propios de la compañía.',
          en: 'A Generative AI Engineer develops applications based on models capable of creating new content such as text, images, audio or video. They not only consume pre-existing models, but also adapt, train or integrate them with the company\'s own data.',
        },
        tasks: [
          {
            title: {
              es: 'Integra modelos de IA generativa en productos',
              en: 'Integrate generative AI models into products',
            },
            desc: {
              es: 'Conecta APIs de LLMs con aplicaciones web, móviles o corporativas.',
              en: 'Connects LLM APIs with web, mobile or enterprise applications.',
            },
          },
          {
            title: {
              es: 'Fine-tuning de modelos',
              en: 'Fine-tune models',
            },
            desc: {
              es: 'Ajusta modelos base con datos específicos de la empresa.',
              en: 'Adjusts base models with company-specific data.',
            },
          },
          {
            title: {
              es: 'Optimiza resultados generados',
              en: 'Optimize generated outputs',
            },
            desc: {
              es: 'Mejora calidad y relevancia del contenido generado.',
              en: 'Improves the quality and relevance of generated content.',
            },
          },
          {
            title: {
              es: 'Despliega soluciones escalables',
              en: 'Deploy scalable solutions',
            },
            desc: {
              es: 'Implementa aplicaciones de IA generativa en la nube.',
              en: 'Implements generative AI applications in the cloud.',
            },
          },
        ],
      },
      {
        slug: 'machine-learning-engineer',
        name: {
          es: 'Machine Learning Engineer',
          en: 'Machine Learning Engineer',
        },
        heroTitle: {
          es: 'Contrata un Machine Learning Engineer para transformar datos en soluciones inteligentes',
          en: 'Hire a Machine Learning Engineer to transform data into intelligent solutions',
        },
        heroSubtitle: {
          es: 'Diseña y entrena modelos que aprenden de tus datos para predecir y automatizar procesos',
          en: 'Design and train models that learn from your data to predict and automate processes',
        },
        description: {
          es: 'Un Machine Learning Engineer diseña, construye y despliega modelos de aprendizaje automático que permiten a las máquinas aprender de los datos. Su rol combina programación, estadística y conocimiento de negocio, asegurando que los modelos escalen y sean eficientes en entornos productivos.',
          en: 'A Machine Learning Engineer designs, builds and deploys machine learning models that allow machines to learn from data. Their role combines programming, statistics and business knowledge, ensuring models scale and are efficient in production environments.',
        },
        tasks: [
          {
            title: {
              es: 'Diseña y entrena modelos',
              en: 'Design and train models',
            },
            desc: {
              es: 'Crea algoritmos de Machine Learning supervisados y no supervisados.',
              en: 'Creates supervised and unsupervised Machine Learning algorithms.',
            },
          },
          {
            title: {
              es: 'Prepara datos',
              en: 'Prepare data',
            },
            desc: {
              es: 'Limpia, transforma y organiza la información para el entrenamiento de modelos.',
              en: 'Cleans, transforms and organizes information for model training.',
            },
          },
          {
            title: {
              es: 'Implementa algoritmos en producción',
              en: 'Deploy algorithms to production',
            },
            desc: {
              es: 'Lleva los modelos a entornos reales para usarlos en tiempo real.',
              en: 'Takes models to real environments for use in real time.',
            },
          },
          {
            title: {
              es: 'Optimiza el rendimiento',
              en: 'Optimize performance',
            },
            desc: {
              es: 'Ajusta parámetros para mayor precisión y eficiencia.',
              en: 'Adjusts parameters for greater accuracy and efficiency.',
            },
          },
        ],
      },
      {
        slug: 'nlp-specialist',
        name: {
          es: 'NLP Specialist',
          en: 'NLP Specialist',
        },
        heroTitle: {
          es: 'Contrata un NLP Specialist para que tus sistemas entiendan el lenguaje humano',
          en: 'Hire an NLP Specialist so your systems understand human language',
        },
        heroSubtitle: {
          es: 'Desarrolla chatbots, traductores automáticos y asistentes virtuales inteligentes',
          en: 'Develop chatbots, automatic translators and intelligent virtual assistants',
        },
        description: {
          es: 'Un NLP Specialist desarrolla sistemas que permiten a las computadoras entender, interpretar y generar lenguaje humano. Gracias a su trabajo, las máquinas pueden comunicarse con las personas en un lenguaje natural y cercano.',
          en: 'An NLP Specialist develops systems that allow computers to understand, interpret and generate human language. Thanks to their work, machines can communicate with people in natural, approachable language.',
        },
        tasks: [
          {
            title: {
              es: 'Entrena modelos de lenguaje',
              en: 'Train language models',
            },
            desc: {
              es: 'Desarrolla algoritmos que entienden y generan texto.',
              en: 'Develops algorithms that understand and generate text.',
            },
          },
          {
            title: {
              es: 'Mejora la interacción humano-máquina',
              en: 'Improve human-machine interaction',
            },
            desc: {
              es: 'Crea chatbots y asistentes virtuales.',
              en: 'Creates chatbots and virtual assistants.',
            },
          },
          {
            title: {
              es: 'Procesa textos a gran escala',
              en: 'Process text at scale',
            },
            desc: {
              es: 'Analiza documentos y conversaciones masivas.',
              en: 'Analyzes large volumes of documents and conversations.',
            },
          },
          {
            title: {
              es: 'Optimiza traducciones y análisis semántico',
              en: 'Optimize translations and semantic analysis',
            },
            desc: {
              es: 'Mejora traducciones automáticas y análisis de sentimientos.',
              en: 'Improves automatic translations and sentiment analysis.',
            },
          },
        ],
      },
      {
        slug: 'computer-vision-engineer',
        name: {
          es: 'Computer Vision Engineer',
          en: 'Computer Vision Engineer',
        },
        heroTitle: {
          es: 'Contrata un Computer Vision Engineer para que las máquinas aprendan a ver',
          en: 'Hire a Computer Vision Engineer to make machines learn to see',
        },
        heroSubtitle: {
          es: 'Desarrolla sistemas de visión artificial para imágenes y videos en tiempo real',
          en: 'Develop computer vision systems for images and videos in real time',
        },
        description: {
          es: 'Un Computer Vision Engineer desarrolla sistemas capaces de interpretar y analizar imágenes o videos para extraer información útil. Este perfil es clave en sectores como seguridad, automóviles autónomos, medicina y retail.',
          en: 'A Computer Vision Engineer develops systems capable of interpreting and analyzing images or videos to extract useful information. This profile is key in sectors such as security, autonomous vehicles, medicine and retail.',
        },
        tasks: [
          {
            title: {
              es: 'Entrena modelos de visión',
              en: 'Train vision models',
            },
            desc: {
              es: 'Desarrolla algoritmos para detección de objetos, reconocimiento facial y clasificación de imágenes.',
              en: 'Develops algorithms for object detection, facial recognition and image classification.',
            },
          },
          {
            title: {
              es: 'Procesa imágenes y videos',
              en: 'Process images and videos',
            },
            desc: {
              es: 'Aplica técnicas de segmentación, filtrado y análisis visual.',
              en: 'Applies segmentation, filtering and visual analysis techniques.',
            },
          },
          {
            title: {
              es: 'Optimiza rendimiento en tiempo real',
              en: 'Optimize real-time performance',
            },
            desc: {
              es: 'Mejora la eficiencia para cámaras o dispositivos móviles.',
              en: 'Improves efficiency for cameras or mobile devices.',
            },
          },
          {
            title: {
              es: 'Integra visión con otros sistemas',
              en: 'Integrate vision with other systems',
            },
            desc: {
              es: 'Conecta modelos de visión con soluciones de IA más amplias.',
              en: 'Connects vision models with broader AI solutions.',
            },
          },
        ],
      },
      {
        slug: 'mlops-engineer',
        name: {
          es: 'MLOps Engineer',
          en: 'MLOps Engineer',
        },
        heroTitle: {
          es: 'Contrata un MLOps Engineer para llevar tus modelos de IA a producción',
          en: 'Hire an MLOps Engineer to take your AI models to production',
        },
        heroSubtitle: {
          es: 'Automatiza, monitorea y optimiza la operación de modelos de Machine Learning',
          en: 'Automate, monitor and optimize the operation of Machine Learning models',
        },
        description: {
          es: 'Un MLOps Engineer combina las prácticas de Machine Learning con DevOps para llevar modelos de IA a producción de forma segura, escalable y eficiente. Su trabajo permite que la IA sea sostenible en el tiempo y útil en el día a día de la organización.',
          en: 'An MLOps Engineer combines Machine Learning practices with DevOps to take AI models to production safely, scalably and efficiently. Their work allows AI to be sustainable over time and useful in the organization\'s day-to-day operations.',
        },
        tasks: [
          {
            title: {
              es: 'Automatiza despliegues de modelos',
              en: 'Automate model deployments',
            },
            desc: {
              es: 'Crea pipelines de ML para producción.',
              en: 'Creates ML pipelines for production.',
            },
          },
          {
            title: {
              es: 'Monitorea el rendimiento',
              en: 'Monitor performance',
            },
            desc: {
              es: 'Supervisa la precisión y eficacia de los modelos.',
              en: 'Supervises the accuracy and effectiveness of models.',
            },
          },
          {
            title: {
              es: 'Gestiona infraestructura',
              en: 'Manage infrastructure',
            },
            desc: {
              es: 'Administra servidores y entornos en la nube.',
              en: 'Manages servers and cloud environments.',
            },
          },
          {
            title: {
              es: 'Optimiza costos y recursos',
              en: 'Optimize costs and resources',
            },
            desc: {
              es: 'Mejora la eficiencia en el uso de infraestructura.',
              en: 'Improves the efficiency of infrastructure usage.',
            },
          },
        ],
      },
      {
        slug: 'prompt-engineer',
        name: {
          es: 'Prompt Engineer',
          en: 'Prompt Engineer',
        },
        heroTitle: {
          es: 'Contrata un Prompt Engineer para optimizar tus interacciones con IA generativa',
          en: 'Hire a Prompt Engineer to optimize your interactions with generative AI',
        },
        heroSubtitle: {
          es: 'Diseña instrucciones precisas que aseguran resultados útiles y confiables de los modelos de IA',
          en: 'Design precise instructions that ensure useful and reliable results from AI models',
        },
        description: {
          es: 'Un Prompt Engineer es el profesional que diseña y optimiza instrucciones para que los modelos de lenguaje generativo produzcan resultados útiles y precisos. Es el puente entre la tecnología de IA y los usuarios finales, asegurando interacciones eficientes y confiables.',
          en: 'A Prompt Engineer is the professional who designs and optimizes instructions so that generative language models produce useful and accurate results. They are the bridge between AI technology and end users, ensuring efficient and reliable interactions.',
        },
        tasks: [
          {
            title: {
              es: 'Diseña prompts efectivos',
              en: 'Design effective prompts',
            },
            desc: {
              es: 'Redacta instrucciones claras para obtener respuestas precisas de los modelos.',
              en: 'Drafts clear instructions to obtain precise responses from the models.',
            },
          },
          {
            title: {
              es: 'Evalúa resultados generados',
              en: 'Evaluate generated results',
            },
            desc: {
              es: 'Mide la calidad y relevancia de las respuestas.',
              en: 'Measures the quality and relevance of responses.',
            },
          },
          {
            title: {
              es: 'Documenta procesos de prompting',
              en: 'Document prompting processes',
            },
            desc: {
              es: 'Crea guías reutilizables para el equipo.',
              en: 'Creates reusable guides for the team.',
            },
          },
          {
            title: {
              es: 'Capacita a equipos',
              en: 'Train teams',
            },
            desc: {
              es: 'Forma usuarios en el uso correcto de la IA generativa.',
              en: 'Trains users in the correct use of generative AI.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'desarrollo',
    name: {
      es: 'Desarrollo',
      en: 'Development',
    },
    defaultProfile: 'desarrollador-front-end',
    profiles: [
      {
        slug: 'desarrollador-front-end',
        name: {
          es: 'Desarrollador Front End',
          en: 'Front End Developer',
        },
        heroTitle: {
          es: 'Contrata un Desarrollador Front End para el código de tu página web',
          en: 'Hire a Front End Developer for your website code',
        },
        heroSubtitle: {
          es: 'Crea interfaces atractivas, rápidas y fáciles de usar para tus clientes',
          en: 'Create attractive, fast and easy-to-use interfaces for your customers',
        },
        description: {
          es: 'Un Desarrollador Front End es quien crea todo aquello que el usuario puede ver en un sitio web y con lo que puede interactuar. Combina el diseño, la tecnología y la programación para así lograr codificar la apariencia de una web. Combina el diseño, tecnología y programación para codificar la apariencia de un sitio web, además de encargarse de su depuración.',
          en: 'A Front End Developer creates everything the user can see and interact with on a website. They combine design, technology and programming to code the appearance of a website, and are also responsible for its debugging and maintenance.',
        },
        tasks: [
          {
            title: {
              es: 'Programa el sitio',
              en: 'Program the site',
            },
            desc: {
              es: 'Utiliza herramientas para crear código como: HTML, CSS y JavaScript.',
              en: 'Uses tools to write code such as HTML, CSS and JavaScript.',
            },
          },
          {
            title: {
              es: 'Traduce y maneja el código',
              en: 'Translate and manage code',
            },
            desc: {
              es: 'Maneja el lenguaje del código para hacer realidad tu página web y lo actualiza en caso de haber cambios o nuevos diseños.',
              en: 'Handles the code language to bring your website to life and updates it when changes or new designs arise.',
            },
          },
          {
            title: {
              es: 'Actualiza el código',
              en: 'Update the code',
            },
            desc: {
              es: 'Actualiza el código de tu producto en caso de haber cambios o nuevos diseños.',
              en: 'Updates the product code when changes or new designs are required.',
            },
          },
          {
            title: {
              es: 'Crea herramientas',
              en: 'Create tools',
            },
            desc: {
              es: 'Mejora la interacción del sitio y la experiencia del usuario sin importar el navegador por medio de herramientas.',
              en: 'Improves site interaction and user experience across all browsers through custom tools.',
            },
          },
        ],
      },
      {
        slug: 'desarrollador-back-end',
        name: {
          es: 'Desarrollador Back End',
          en: 'Back End Developer',
        },
        heroTitle: {
          es: 'Contrata un Desarrollador Back End para el código de tu página web',
          en: 'Hire a Back End Developer for your website code',
        },
        heroSubtitle: {
          es: 'Construye sistemas robustos, seguros y escalables para tu negocio',
          en: 'Build robust, secure and scalable systems for your business',
        },
        description: {
          es: 'Un Desarrollador Back End tiene como tarea escribir el código que realiza todas las acciones y operaciones del servidor. Se aseguran de que la comunicación entre el servidor y la web o app se lleve a cabo de manera correcta y fluida. Se encargan de todo aquello que el usuario no puede ver, pero que es vital para poder realizar cualquier acción dentro de un sitio web.',
          en: 'A Back End Developer is tasked with writing the code that performs all server actions and operations. They ensure that communication between the server and the web or app is carried out correctly and smoothly. They handle everything the user cannot see, but that is vital for performing any action within a website.',
        },
        tasks: [
          {
            title: {
              es: 'Maneja lenguaje de programación',
              en: 'Handle programming languages',
            },
            desc: {
              es: 'Entiende y maneja lenguajes como ASP.NET, PHP, Ruby, Python, Node.js y JavaScript, los cuales son importantes y básicos para el desarrollo web.',
              en: 'Understands and manages languages such as ASP.NET, PHP, Ruby, Python, Node.js and JavaScript, which are fundamental for web development.',
            },
          },
          {
            title: {
              es: 'Conecta el sitio web',
              en: 'Connect the website',
            },
            desc: {
              es: 'Se encarga de conectar cualquier app o página web al servidor elegido y se asegura de que funcione correctamente.',
              en: 'Connects any app or website to the chosen server and ensures it works correctly.',
            },
          },
          {
            title: {
              es: 'Mantiene el servidor web',
              en: 'Maintain the web server',
            },
            desc: {
              es: 'Usa las librerías del servidor web para que el sitio funcione correctamente y no se alente, implementa temas de caché y mantiene el sitio web seguro.',
              en: 'Uses web server libraries to ensure the site runs correctly without slowdowns, implements caching and keeps the website secure.',
            },
          },
          {
            title: {
              es: 'Automatiza procesos',
              en: 'Automate processes',
            },
            desc: {
              es: 'Gestiona la construcción de las funciones del servicio y las vuelve automáticas.',
              en: 'Manages the construction of service functions and makes them automatic.',
            },
          },
          {
            title: {
              es: 'Obtiene bases de datos',
              en: 'Manage databases',
            },
            desc: {
              es: 'Define y configura la base de datos que el sitio va generando a partir del uso que le dan los usuarios.',
              en: 'Defines and configures the database that the site generates from user activity.',
            },
          },
        ],
      },
      {
        slug: 'desarrollador-full-stack',
        name: {
          es: 'Desarrollador Full Stack',
          en: 'Full Stack Developer',
        },
        heroTitle: {
          es: 'Contrata un Desarrollador Full Stack para desarrollo tecnológico',
          en: 'Hire a Full Stack Developer for technology development',
        },
        heroSubtitle: {
          es: 'Integra frontend y backend para construir aplicaciones completas y escalables',
          en: 'Integrate frontend and backend to build complete and scalable applications',
        },
        description: {
          es: 'Un Desarrollador Full Stack es quien combina el Frontend y Backend y tiene la capacidad de dominar diversos lenguajes de programación tanto del lado del servidor, como del lado del usuario. Ayuda a que la construcción de cualquier producto digital sea más rápida ya que puede trabajar de ambos lados al mismo tiempo. Este perfil requiere un gran conjunto de habilidades y conocimientos acerca de cómo se comunican y se conectan el desarrollo front-end y back-end.',
          en: 'A Full Stack Developer combines Frontend and Backend and has the ability to master various programming languages on both the server side and the client side. They help make the construction of any digital product faster since they can work on both sides simultaneously. This profile requires a broad skill set and knowledge of how front-end and back-end development communicate and connect.',
        },
        tasks: [
          {
            title: {
              es: 'Maneja lenguaje de programación',
              en: 'Handle programming languages',
            },
            desc: {
              es: 'Entiende y maneja lenguajes como ASP.NET, PHP, Ruby, Python, Node.js y JavaScript, los cuales son importantes y básicos para el desarrollo web.',
              en: 'Understands and manages languages such as ASP.NET, PHP, Ruby, Python, Node.js and JavaScript, which are fundamental for web development.',
            },
          },
          {
            title: {
              es: 'Conecta el sitio web',
              en: 'Connect the website',
            },
            desc: {
              es: 'Se encarga de conectar cualquier app o página web al servidor elegido y se asegura de que funcione correctamente.',
              en: 'Connects any app or website to the chosen server and ensures it works correctly.',
            },
          },
          {
            title: {
              es: 'Traduce y maneja el código',
              en: 'Translate and manage code',
            },
            desc: {
              es: 'Maneja el lenguaje del código para hacer realidad tu página web y lo actualiza en caso de haber cambios o nuevos diseños.',
              en: 'Handles the code language to bring your website to life and updates it when changes or new designs arise.',
            },
          },
          {
            title: {
              es: 'Actualiza el código',
              en: 'Update the code',
            },
            desc: {
              es: 'Actualiza el código de tu producto en caso de haber cambios o nuevos diseños.',
              en: 'Updates the product code when changes or new designs are required.',
            },
          },
          {
            title: {
              es: 'Crea herramientas',
              en: 'Create tools',
            },
            desc: {
              es: 'Mejora la interacción del sitio y la experiencia del usuario sin importar el navegador por medio de herramientas.',
              en: 'Improves site interaction and user experience across all browsers through custom tools.',
            },
          },
        ],
      },
      {
        slug: 'desarrollador-web',
        name: {
          es: 'Desarrollador Web',
          en: 'Web Developer',
        },
        heroTitle: {
          es: 'Contrata un Desarrollador Web para tu página web',
          en: 'Hire a Web Developer for your website',
        },
        heroSubtitle: {
          es: 'Diseña y desarrolla sitios web rápidos, seguros y personalizados para tu negocio',
          en: 'Design and develop fast, secure and custom websites for your business',
        },
        description: {
          es: 'Un Desarrollador Web domina tanto el frontend como el backend y tiene la capacidad de construir sitios web completos. Diseña, desarrolla y mantiene la presencia digital de tu negocio, asegurando que sea rápida, segura y visualmente atractiva para tus usuarios.',
          en: 'A Web Developer masters both frontend and backend and has the ability to build complete websites. They design, develop and maintain your business\'s digital presence, ensuring it is fast, secure and visually appealing for your users.',
        },
        tasks: [
          {
            title: {
              es: 'Planifica, diseña y lleva a cabo pruebas',
              en: 'Plan, design and carry out tests',
            },
            desc: {
              es: 'Trabaja con el equipo de desarrollo para diseñar un plan que asegure que el producto cumpla con los requisitos y funcionalidades deseados.',
              en: 'Works with the development team to design a plan that ensures the product meets the desired requirements and functionalities.',
            },
          },
          {
            title: {
              es: 'Automatiza pruebas',
              en: 'Automate tests',
            },
            desc: {
              es: 'Utiliza herramientas de automatización para realizar pruebas de manera más eficiente y efectiva.',
              en: 'Uses automation tools to carry out tests more efficiently and effectively.',
            },
          },
          {
            title: {
              es: 'Resuelve problemas',
              en: 'Solve problems',
            },
            desc: {
              es: 'Registra y gestiona las incidencias encontradas durante el proceso de desarrollo para asegurar que se resuelvan adecuadamente.',
              en: 'Records and manages incidents found during the development process to ensure they are resolved appropriately.',
            },
          },
          {
            title: {
              es: 'Evalúa la experiencia de usuario',
              en: 'Evaluate the user experience',
            },
            desc: {
              es: 'Realiza pruebas de experiencia del usuario para asegurar que el producto cumpla con las expectativas y necesidades del usuario final.',
              en: 'Performs user experience tests to ensure the product meets the expectations and needs of the end user.',
            },
          },
        ],
      },
      {
        slug: 'ingeniero-qa',
        name: {
          es: 'Ingeniero QA',
          en: 'QA Engineer',
        },
        heroTitle: {
          es: 'Contrata un Ingeniero QA para la calidad de tus productos',
          en: 'Hire a QA Engineer for the quality of your products',
        },
        heroSubtitle: {
          es: 'Garantiza productos libres de errores con pruebas exhaustivas y automatizadas',
          en: 'Guarantee error-free products with comprehensive and automated testing',
        },
        description: {
          es: 'Un ingeniero de control de calidad (QA) es responsable de garantizar que los productos y sistemas de software cumplan las normas de calidad establecidas. Trabajan en estrecha colaboración con desarrolladores de software, gestores de productos y otras partes interesadas para comprender los requisitos del proyecto, desarrollar planes de pruebas y ejecutarlas para identificar defectos y errores.',
          en: 'A Quality Assurance (QA) Engineer is responsible for ensuring that software products and systems meet established quality standards. They work closely with software developers, product managers and other stakeholders to understand project requirements, develop test plans and execute them to identify defects and errors.',
        },
        tasks: [
          {
            title: {
              es: 'Planifica, diseña y lleva a cabo pruebas',
              en: 'Plan, design and carry out tests',
            },
            desc: {
              es: 'Trabaja con el equipo de desarrollo para diseñar un plan de pruebas que asegure que el producto cumpla con los requisitos y funcionalidades deseados. Realiza pruebas de software para detectar errores y problemas de funcionamiento en el producto.',
              en: 'Works with the development team to design a test plan that ensures the product meets the desired requirements and functionalities. Performs software tests to detect errors and operational issues in the product.',
            },
          },
          {
            title: {
              es: 'Automatiza pruebas',
              en: 'Automate tests',
            },
            desc: {
              es: 'Utiliza herramientas de automatización para realizar pruebas de manera más eficiente y efectiva.',
              en: 'Uses automation tools to carry out tests more efficiently and effectively.',
            },
          },
          {
            title: {
              es: 'Resuelve problemas',
              en: 'Solve problems',
            },
            desc: {
              es: 'Registra y gestiona las incidencias encontradas durante el proceso de pruebas para asegurar que se resuelvan adecuadamente.',
              en: 'Records and manages incidents found during the testing process to ensure they are resolved appropriately.',
            },
          },
          {
            title: {
              es: 'Evalúa la experiencia de usuario',
              en: 'Evaluate the user experience',
            },
            desc: {
              es: 'Puede realizar pruebas de experiencia del usuario para asegurar que el producto cumpla con las expectativas y necesidades del usuario final.',
              en: 'Can perform user experience tests to ensure the product meets the expectations and needs of the end user.',
            },
          },
        ],
      },
      {
        slug: 'desarrollador-android',
        name: {
          es: 'Desarrollador Android',
          en: 'Android Developer',
        },
        heroTitle: {
          es: 'Contrata un Desarrollador Android para tu app',
          en: 'Hire an Android Developer for your app',
        },
        heroSubtitle: {
          es: 'Crea aplicaciones móviles nativas, rápidas y seguras para Android',
          en: 'Create native, fast and secure mobile applications for Android',
        },
        description: {
          es: 'Un Desarrollador Android es especialista en el diseño de aplicaciones para el sistema operativo Android. Se encarga de la aplicación de principio a fin asegurándose de que sea fácil de usar para el usuario. Por medio de diversas herramientas escribe código de programación entregando apps funcionales.',
          en: 'An Android Developer specializes in designing applications for the Android operating system. They handle the application from start to finish, ensuring it is easy to use for the user. Through various tools they write programming code delivering functional apps.',
        },
        tasks: [
          {
            title: {
              es: 'Diseña y mantiene el código',
              en: 'Design and maintain the code',
            },
            desc: {
              es: 'Se especializa en el desarrollo de aplicaciones móviles para Android utilizando principalmente Java y Kotlin. Requiere una sólida comprensión de la programación, el diseño de interfaces y la arquitectura de software.',
              en: 'Specializes in developing mobile applications for Android using primarily Java and Kotlin. Requires a solid understanding of programming, interface design and software architecture.',
            },
          },
          {
            title: {
              es: 'Trabaja con APIs',
              en: 'Work with APIs',
            },
            desc: {
              es: 'Utiliza diferentes interfaces de programación de aplicaciones para asegurarse de que la app pueda interactuar con diferentes servicios.',
              en: 'Uses different application programming interfaces to ensure the app can interact with various services.',
            },
          },
          {
            title: {
              es: 'Garantiza el rendimiento y la calidad',
              en: 'Guarantee performance and quality',
            },
            desc: {
              es: 'Se asegura de que la aplicación responda de forma rápida, y de que el rendimiento para los usuarios sea el mejor. Prueba la aplicación para detectar posibles problemas.',
              en: 'Ensures the application responds quickly and that performance for users is optimal. Tests the application to detect potential issues.',
            },
          },
          {
            title: {
              es: 'Maneja bases de datos',
              en: 'Manage databases',
            },
            desc: {
              es: 'Supervisa la sincronización entre el almacenamiento local y las bases de datos remotas.',
              en: 'Supervises synchronization between local storage and remote databases.',
            },
          },
        ],
      },
      {
        slug: 'desarrollador-ios',
        name: {
          es: 'Desarrollador iOS',
          en: 'iOS Developer',
        },
        heroTitle: {
          es: 'Contrata un Desarrollador iOS para tu aplicación movil',
          en: 'Hire an iOS Developer for your mobile application',
        },
        heroSubtitle: {
          es: 'Crea aplicaciones nativas para iPhone y iPad con alto rendimiento y diseño intuitivo',
          en: 'Create native applications for iPhone and iPad with high performance and intuitive design',
        },
        description: {
          es: 'Un Desarrollador iOS es especialista en el diseño de aplicaciones para el sistema operativo nativo de Apple y sus diversos dispositivos como iPad, Apple Watch y iPhone. Se encarga de la aplicación de principio a fin asegurándose de que sea fácil de usar para el usuario. Por medio de diversas herramientas escribe código de programación entregando apps funcionales.',
          en: 'An iOS Developer specializes in designing applications for Apple\'s native operating system and its various devices such as iPad, Apple Watch and iPhone. They handle the application from start to finish, ensuring it is easy to use for the user. Through various tools they write programming code delivering functional apps.',
        },
        tasks: [
          {
            title: {
              es: 'Diseña y mantiene el código',
              en: 'Design and maintain the code',
            },
            desc: {
              es: 'Se encarga de lenguajes de programación como Swift o Objective-C y de otras herramientas. Requieren una profunda comprensión de la programación y el diseño para mantener un entorno de código reutilizable.',
              en: 'Handles programming languages such as Swift or Objective-C and other tools. Requires a deep understanding of programming and design to maintain a reusable code environment.',
            },
          },
          {
            title: {
              es: 'Trabaja con APIs',
              en: 'Work with APIs',
            },
            desc: {
              es: 'Utiliza diferentes interfaces de programación de aplicaciones para asegurarse de que la app pueda interactuar con diferentes servicios.',
              en: 'Uses different application programming interfaces to ensure the app can interact with various services.',
            },
          },
          {
            title: {
              es: 'Garantiza el rendimiento y la calidad',
              en: 'Guarantee performance and quality',
            },
            desc: {
              es: 'Se asegura de que la aplicación responda de forma rápida, y de que el rendimiento para los usuarios sea el mejor.',
              en: 'Ensures the application responds quickly and that performance for users is optimal.',
            },
          },
          {
            title: {
              es: 'Maneja bases de datos',
              en: 'Manage databases',
            },
            desc: {
              es: 'Supervisa la sincronización entre el almacenamiento local y las bases de datos remotas.',
              en: 'Supervises synchronization between local storage and remote databases.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'data',
    name: {
      es: 'Data',
      en: 'Data',
    },
    defaultProfile: 'data-engineer',
    profiles: [
      {
        slug: 'data-engineer',
        name: {
          es: 'Data Engineer',
          en: 'Data Engineer',
        },
        heroTitle: {
          es: 'Contrata un Data Engineer para la construcción y gestión de infraestructuras de datos',
          en: 'Hire a Data Engineer to build and manage data infrastructure',
        },
        heroSubtitle: {
          es: 'Diseña y construye los sistemas que hacen que tus datos estén siempre disponibles',
          en: 'Design and build the systems that keep your data always available',
        },
        description: {
          es: 'Un Data Engineer se encarga de diseñar, construir y gestionar la infraestructura y los sistemas que permiten el procesamiento, almacenamiento y análisis de grandes volúmenes de datos. Trabajan con bases de datos, sistemas de procesamiento de datos y plataformas en la nube para asegurar que los datos sean accesibles, rápidos de procesar y estén disponibles para su análisis en tiempo real.',
          en: 'A Data Engineer is responsible for designing, building and managing the infrastructure and systems that enable the processing, storage and analysis of large volumes of data. They work with databases, data processing systems and cloud platforms to ensure that data is accessible, fast to process and available for real-time analysis.',
        },
        tasks: [
          {
            title: {
              es: 'Diseña infraestructuras de datos',
              en: 'Design data infrastructures',
            },
            desc: {
              es: 'Crea y mantiene la arquitectura de bases de datos, data lakes y sistemas de procesamiento de datos para asegurar el almacenamiento y acceso eficiente a los datos.',
              en: 'Creates and maintains the architecture of databases, data lakes and data processing systems to ensure efficient data storage and access.',
            },
          },
          {
            title: {
              es: 'Integra datos de diversas fuentes',
              en: 'Integrate data from various sources',
            },
            desc: {
              es: 'Conecta diversas fuentes de datos, como bases de datos y APIs, y asegura que los datos estén integrados y sean accesibles para su procesamiento y análisis.',
              en: 'Connects various data sources, such as databases and APIs, and ensures data is integrated and accessible for processing and analysis.',
            },
          },
          {
            title: {
              es: 'Optimiza el rendimiento de las bases de datos',
              en: 'Optimize database performance',
            },
            desc: {
              es: 'Mejora el rendimiento y la escalabilidad de las infraestructuras de datos, utilizando tecnologías como la compresión, particionado de datos y optimización de consultas.',
              en: 'Improves the performance and scalability of data infrastructures using technologies such as compression, data partitioning and query optimization.',
            },
          },
          {
            title: {
              es: 'Desarrolla pipelines de datos',
              en: 'Develop data pipelines',
            },
            desc: {
              es: 'Crea y mantiene pipelines de datos para procesar y transformar grandes volúmenes de datos, asegurando que los datos sean entregados en el formato adecuado para su análisis.',
              en: 'Creates and maintains data pipelines to process and transform large volumes of data, ensuring data is delivered in the appropriate format for analysis.',
            },
          },
          {
            title: {
              es: 'Implementa soluciones en la nube',
              en: 'Implement cloud solutions',
            },
            desc: {
              es: 'Implementa soluciones de datos en plataformas en la nube como AWS, Google Cloud o Azure, garantizando que las infraestructuras sean escalables, seguras y de alto rendimiento.',
              en: 'Implements data solutions on cloud platforms such as AWS, Google Cloud or Azure, ensuring that infrastructures are scalable, secure and high-performance.',
            },
          },
        ],
      },
      {
        slug: 'data-analyst',
        name: {
          es: 'Data Analyst',
          en: 'Data Analyst',
        },
        heroTitle: {
          es: 'Contrata un Data Analyst para extraer insights clave de tus datos',
          en: 'Hire a Data Analyst to extract key insights from your data',
        },
        heroSubtitle: {
          es: 'Convierte grandes volúmenes de información en decisiones estratégicas',
          en: 'Turn large volumes of information into strategic decisions',
        },
        description: {
          es: 'Un Data Analyst se enfoca en analizar datos históricos y actuales para ayudar a las organizaciones a tomar decisiones basadas en datos. Trabajan con grandes volúmenes de datos para identificar patrones, tendencias y realizar análisis descriptivos. Utilizan herramientas estadísticas y de visualización de datos para proporcionar informes que ayudan a los equipos a tomar decisiones estratégicas y mejorar los procesos de negocio.',
          en: 'A Data Analyst focuses on analyzing historical and current data to help organizations make data-driven decisions. They work with large volumes of data to identify patterns, trends and perform descriptive analyses. They use statistical and data visualization tools to provide reports that help teams make strategic decisions and improve business processes.',
        },
        tasks: [
          {
            title: {
              es: 'Recopila y limpia datos',
              en: 'Collect and clean data',
            },
            desc: {
              es: 'Extrae datos de diversas fuentes y los limpia para garantizar que estén listos para su análisis, eliminando inconsistencias o valores atípicos.',
              en: 'Extracts data from various sources and cleans it to ensure it is ready for analysis, removing inconsistencies or outliers.',
            },
          },
          {
            title: {
              es: 'Realiza análisis descriptivos',
              en: 'Perform descriptive analyses',
            },
            desc: {
              es: 'Analiza los datos para identificar patrones y tendencias. Desarrolla informes que proporcionen a los equipos una visión clara de la situación actual del negocio.',
              en: 'Analyzes data to identify patterns and trends. Develops reports that provide teams with a clear view of the current business situation.',
            },
          },
          {
            title: {
              es: 'Desarrolla visualizaciones de datos',
              en: 'Develop data visualizations',
            },
            desc: {
              es: 'Crea gráficos e informes visuales que permitan a los equipos interpretar y comprender los datos de manera rápida y clara.',
              en: 'Creates charts and visual reports that allow teams to interpret and understand data quickly and clearly.',
            },
          },
          {
            title: {
              es: 'Realiza análisis ad-hoc',
              en: 'Perform ad-hoc analyses',
            },
            desc: {
              es: 'Realiza análisis específicos según las necesidades del negocio, respondiendo preguntas clave y proporcionando insights que mejoren las decisiones estratégicas.',
              en: 'Performs specific analyses according to business needs, answering key questions and providing insights that improve strategic decisions.',
            },
          },
          {
            title: {
              es: 'Colabora con otros equipos',
              en: 'Collaborate with other teams',
            },
            desc: {
              es: 'Trabaja en conjunto con otros departamentos como marketing, ventas y operaciones para proporcionar datos relevantes que apoyen la toma de decisiones.',
              en: 'Works together with other departments such as marketing, sales and operations to provide relevant data that supports decision-making.',
            },
          },
        ],
      },
      {
        slug: 'business-inteligence',
        name: {
          es: 'Business Intelligence',
          en: 'Business Intelligence',
        },
        heroTitle: {
          es: 'Contrata un Business Intelligence para el análisis de tu negocio',
          en: 'Hire a Business Intelligence professional to analyze your business',
        },
        heroSubtitle: {
          es: 'Impulsa tu empresa con reportes claros y visualizaciones que guían decisiones inteligentes',
          en: 'Drive your company forward with clear reports and visualizations that guide smart decisions',
        },
        description: {
          es: 'Un profesional de Business Intelligence (BI) es responsable de analizar e interpretar conjuntos de datos complejos para proporcionar ideas y recomendaciones estratégicas a los líderes de la empresa. Trabajan con diversas fuentes de datos, como datos financieros, datos de clientes y tendencias de mercado, y utilizan herramientas como software de visualización de datos, modelos estadísticos y algoritmos de aprendizaje automático.',
          en: 'A Business Intelligence (BI) professional is responsible for analyzing and interpreting complex data sets to provide strategic insights and recommendations to company leaders. They work with various data sources, such as financial data, customer data and market trends, and use tools such as data visualization software, statistical models and machine learning algorithms.',
        },
        tasks: [
          {
            title: {
              es: 'Recopila y analiza datos',
              en: 'Collect and analyze data',
            },
            desc: {
              es: 'Recopila datos de distintas fuentes y genera un análisis de los mismos para identificar patrones, tendencias y perspectivas.',
              en: 'Collects data from different sources and generates analysis to identify patterns, trends and insights.',
            },
          },
          {
            title: {
              es: 'Modela datos',
              en: 'Model data',
            },
            desc: {
              es: 'Crea modelos de datos que representen las relaciones entre diferentes puntos de datos, e identifica las métricas clave que son importantes para el negocio.',
              en: 'Creates data models that represent the relationships between different data points, and identifies key metrics that are important for the business.',
            },
          },
          {
            title: {
              es: 'Visualiza datos',
              en: 'Visualize data',
            },
            desc: {
              es: 'Crea informes y otras representaciones visuales de los datos que logren entenderse fácilmente para otras personas.',
              en: 'Creates reports and other visual representations of data that can be easily understood by others.',
            },
          },
          {
            title: {
              es: 'Supervisa el rendimiento',
              en: 'Monitor performance',
            },
            desc: {
              es: 'Le da seguimiento a las métricas clave del negocio, identifica áreas de mejora y proporciona recomendaciones para la optimización.',
              en: 'Tracks key business metrics, identifies areas for improvement and provides recommendations for optimization.',
            },
          },
          {
            title: {
              es: 'Hace una prospectiva empresarial',
              en: 'Conduct business forecasting',
            },
            desc: {
              es: 'Utiliza datos previos para hacer predicciones sobre el rendimiento futuro del negocio, y proporciona recomendaciones sobre cómo el negocio puede prepararse mejor.',
              en: 'Uses historical data to make predictions about the future performance of the business, and provides recommendations on how the business can best prepare.',
            },
          },
        ],
      },
      {
        slug: 'data-scientist',
        name: {
          es: 'Data Scientist',
          en: 'Data Scientist',
        },
        heroTitle: {
          es: 'Contrata un Data Scientist para tu estrategia de datos',
          en: 'Hire a Data Scientist for your data strategy',
        },
        heroSubtitle: {
          es: 'Aplica inteligencia artificial y machine learning para descubrir nuevas oportunidades',
          en: 'Apply artificial intelligence and machine learning to uncover new opportunities',
        },
        description: {
          es: 'Un Data Scientist es un profesional que utiliza métodos estadísticos y computacionales para analizar conjuntos de datos grandes y complejos. Trabajan con diversas fuentes de datos, tanto estructurados como no estructurados, y utilizan herramientas como modelos estadísticos, algoritmos de aprendizaje automático y software de visualización de datos para extraer información.',
          en: 'A Data Scientist is a professional who uses statistical and computational methods to analyze large and complex data sets. They work with various data sources, both structured and unstructured, and use tools such as statistical models, machine learning algorithms and data visualization software to extract information.',
        },
        tasks: [
          {
            title: {
              es: 'Analiza datos',
              en: 'Analyze data',
            },
            desc: {
              es: 'Recopila, limpia y procesa conjuntos de datos grandes y complejos procedentes de diversas fuentes. Aplica técnicas de análisis estadístico para identificar patrones y tendencias.',
              en: 'Collects, cleans and processes large and complex data sets from various sources. Applies statistical analysis techniques to identify patterns and trends.',
            },
          },
          {
            title: {
              es: 'Desarrolla modelos',
              en: 'Develop models',
            },
            desc: {
              es: 'Genera y aplica modelos predictivos y algoritmos para apoyar los objetivos empresariales.',
              en: 'Generates and applies predictive models and algorithms to support business objectives.',
            },
          },
          {
            title: {
              es: 'Realiza pruebas',
              en: 'Run experiments',
            },
            desc: {
              es: 'Diseña y realiza experimentos para probar hipótesis y validar modelos.',
              en: 'Designs and runs experiments to test hypotheses and validate models.',
            },
          },
          {
            title: {
              es: 'Presenta los datos',
              en: 'Present data',
            },
            desc: {
              es: 'Crea visualizaciones de datos e informes para comunicar los resultados a las partes interesadas.',
              en: 'Creates data visualizations and reports to communicate results to stakeholders.',
            },
          },
          {
            title: {
              es: 'Realiza investigaciones',
              en: 'Conduct research',
            },
            desc: {
              es: 'Indaga basándose en datos e identifica nuevas oportunidades de análisis para apoyar el crecimiento del negocio.',
              en: 'Investigates based on data and identifies new analysis opportunities to support business growth.',
            },
          },
        ],
      },
      {
        slug: 'consultor-analitica-web',
        name: {
          es: 'Consultor de Analítica Web',
          en: 'Web Analytics Consultant',
        },
        heroTitle: {
          es: 'Contrata un Consultor de Analítica Web para el performance de tu web',
          en: 'Hire a Web Analytics Consultant for your website performance',
        },
        heroSubtitle: {
          es: 'Optimiza el rendimiento de tu sitio con decisiones basadas en datos',
          en: 'Optimize your site performance with data-driven decisions',
        },
        description: {
          es: 'Un consultor analista web es un profesional que ayuda a las organizaciones a comprender y optimizar su presencia en línea. Utilizan el análisis y la interpretación de datos para proporcionar información sobre el tráfico del sitio web, el comportamiento de los usuarios y el journey de los clientes.',
          en: 'A web analytics consultant is a professional who helps organizations understand and optimize their online presence. They use data analysis and interpretation to provide information about website traffic, user behavior and the customer journey.',
        },
        tasks: [
          {
            title: {
              es: 'Analiza datos',
              en: 'Analyze data',
            },
            desc: {
              es: 'Analiza los datos de sitios web y aplicaciones móviles para extraer información valiosa y comprender el comportamiento de los usuarios.',
              en: 'Analyzes data from websites and mobile applications to extract valuable information and understand user behavior.',
            },
          },
          {
            title: {
              es: 'Desarrolla estrategias',
              en: 'Develop strategies',
            },
            desc: {
              es: 'Trabaja con equipos de marketing y tecnología para desarrollar estrategias que mejoren la experiencia del usuario, aumenten la tasa de conversión y optimicen el rendimiento.',
              en: 'Works with marketing and technology teams to develop strategies that improve user experience, increase conversion rates and optimize performance.',
            },
          },
          {
            title: {
              es: 'Configura herramientas de análisis',
              en: 'Configure analytics tools',
            },
            desc: {
              es: 'Configura y administra herramientas de análisis web, como Google Analytics, Adobe Analytics, Mixpanel, entre otras.',
              en: 'Configures and manages web analytics tools such as Google Analytics, Adobe Analytics, Mixpanel, among others.',
            },
          },
          {
            title: {
              es: 'Genera informes',
              en: 'Generate reports',
            },
            desc: {
              es: 'Realiza informes que resumen los hallazgos del análisis de datos y proporcionan recomendaciones para mejorar el rendimiento del sitio web.',
              en: 'Creates reports that summarize data analysis findings and provide recommendations to improve website performance.',
            },
          },
          {
            title: {
              es: 'Monitorea y da seguimiento',
              en: 'Monitor and track',
            },
            desc: {
              es: 'Monitorea continuamente el rendimiento del sitio web y realiza un seguimiento de las tendencias y patrones del usuario.',
              en: 'Continuously monitors website performance and tracks user trends and patterns.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'diseno',
    name: {
      es: 'Diseño',
      en: 'Design',
    },
    defaultProfile: 'disenador-ux',
    profiles: [
      {
        slug: 'disenador-ux',
        name: {
          es: 'Diseñador UX',
          en: 'UX Designer',
        },
        heroTitle: {
          es: 'Contrata un Diseñador UX para la experiencia de usuario',
          en: 'Hire a UX Designer for user experience',
        },
        heroSubtitle: {
          es: 'Diseña experiencias digitales centradas en el usuario y orientadas a resultados',
          en: 'Design user-centered digital experiences oriented toward results',
        },
        description: {
          es: 'Un Diseñador UX es la persona que trabaja asegurando la experiencia del usuario en un producto o servicio digital. Su objetivo es lograr que sea accesible para cualquier persona y logre atacar las necesidades tanto del usuario como de la empresa. Diseña de forma estratégica con base en la experiencia del usuario y se asegura de que la navegación sea fácil e intuitiva para cualquier persona sin importar sus capacidades.',
          en: 'A UX Designer is the person who works to ensure the user experience in a digital product or service. Their goal is to make it accessible to anyone and address the needs of both the user and the company. They design strategically based on user experience and ensure that navigation is easy and intuitive for anyone regardless of their abilities.',
        },
        tasks: [
          {
            title: {
              es: 'Diseña para el usuario',
              en: 'Design for the user',
            },
            desc: {
              es: 'Crea diseños user friendly para que el usuario tenga la mejor experiencia al utilizar un producto digital.',
              en: 'Creates user-friendly designs so that users have the best experience when using a digital product.',
            },
          },
          {
            title: {
              es: 'Crear Wireframes e interfaces',
              en: 'Create wireframes and interfaces',
            },
            desc: {
              es: 'Por medio de herramientas visuales define la estructura, secciones e interfaces del producto.',
              en: 'Uses visual tools to define the structure, sections and interfaces of the product.',
            },
          },
          {
            title: {
              es: 'Realiza pruebas',
              en: 'Conduct tests',
            },
            desc: {
              es: 'Por medio de prueba A/B, comprueba la funcionalidad para mejorar la usabilidad de la página web o app directamente en un navegador.',
              en: 'Through A/B testing, verifies functionality to improve the usability of the website or app directly in a browser.',
            },
          },
          {
            title: {
              es: 'Proporciona soporte y mejoras',
              en: 'Provide support and improvements',
            },
            desc: {
              es: 'Revisa continuamente las páginas web y apps para optimizarlas con diseños y recomendaciones que continúen elevando la experiencia del usuario.',
              en: 'Continuously reviews websites and apps to optimize them with designs and recommendations that keep elevating the user experience.',
            },
          },
        ],
      },
      {
        slug: 'disenador-ui',
        name: {
          es: 'Diseñador UI',
          en: 'UI Designer',
        },
        heroTitle: {
          es: 'Contrata un Diseñador UI para la interacción con tu usuario',
          en: 'Hire a UI Designer for interaction with your user',
        },
        heroSubtitle: {
          es: 'Crea interfaces visuales modernas, coherentes y centradas en el usuario',
          en: 'Create modern, coherent and user-centered visual interfaces',
        },
        description: {
          es: 'Un Diseñador UI se encarga de crear los elementos visuales de un producto digital. Su foco son las pantallas y los elementos que las componen, como botones, iconos, menús desplegables, etc. Se asegura de que la interfaz sea intuitiva y amigable para el usuario y estudia cómo cada elemento afecta al usuario y su experiencia.',
          en: 'A UI Designer is responsible for creating the visual elements of a digital product. Their focus is on the screens and the elements that compose them, such as buttons, icons, dropdown menus, etc. They ensure the interface is intuitive and user-friendly, and study how each element affects the user and their experience.',
        },
        tasks: [
          {
            title: {
              es: 'Crea un diseño atractivo',
              en: 'Create an attractive design',
            },
            desc: {
              es: 'Genera desde la paleta de colores, hasta botones, iconos, y formularios que vayan de acuerdo con la identidad de la marca.',
              en: 'Creates everything from the color palette to buttons, icons and forms that align with the brand identity.',
            },
          },
          {
            title: {
              es: 'Hace la maquetación',
              en: 'Create the layout',
            },
            desc: {
              es: 'Transforma un diseño gráfico en una interfaz funcional en términos de programación.',
              en: 'Transforms a graphic design into a functional interface in programming terms.',
            },
          },
          {
            title: {
              es: 'Asegura la Interacción',
              en: 'Ensure interaction',
            },
            desc: {
              es: 'Procura que las interacciones sean efectivas y coherentes para que el usuario tenga una reacción positiva al usar el producto digital.',
              en: 'Ensures interactions are effective and coherent so that users have a positive reaction when using the digital product.',
            },
          },
          {
            title: {
              es: 'Asegura la accesibilidad',
              en: 'Ensure accessibility',
            },
            desc: {
              es: 'Diseña para que todas las personas, sin importar sus capacidades físicas, cognitivas y otros contextos, puedan usar el servicio.',
              en: 'Designs so that all people, regardless of their physical, cognitive and other contextual abilities, can use the service.',
            },
          },
        ],
      },
      {
        slug: 'product-designer',
        name: {
          es: 'Product Designer',
          en: 'Product Designer',
        },
        heroTitle: {
          es: 'Contrata un Product Designer para tu producto digital',
          en: 'Hire a Product Designer for your digital product',
        },
        heroSubtitle: {
          es: 'Integra estrategia, diseño UX/UI e innovación para crear productos digitales exitosos',
          en: 'Integrate strategy, UX/UI design and innovation to create successful digital products',
        },
        description: {
          es: 'Un Product Designer se encarga de desarrollar un producto digital enfocado en satisfacer las necesidades del usuario una vez identificado un problema. Crea soluciones que puedan ser probadas por los usuarios y que sean innovadoras y creativas. Su trabajo se basa en el Design Thinking, el cual se enfoca en resolver problemas priorizando siempre las necesidades del usuario.',
          en: 'A Product Designer is responsible for developing a digital product focused on satisfying user needs once a problem has been identified. They create solutions that can be tested by users and that are innovative and creative. Their work is based on Design Thinking, which focuses on solving problems while always prioritizing user needs.',
        },
        tasks: [
          {
            title: {
              es: 'Define al usuario',
              en: 'Define the user',
            },
            desc: {
              es: 'Por medio del User Research obtiene datos de los usuarios que le permiten conocer sus necesidades principales, también le ayuda a definir al mercado meta y la competencia.',
              en: 'Through User Research, obtains user data that reveals their main needs, and also helps define the target market and competition.',
            },
          },
          {
            title: {
              es: 'Define qué requiere el producto',
              en: 'Define product requirements',
            },
            desc: {
              es: 'Por medio de herramientas como bocetos y prototipos obtienen insights acerca de hacia dónde se dirige el producto y cuál será su concepto.',
              en: 'Through tools such as sketches and prototypes, gains insights about where the product is headed and what its concept will be.',
            },
          },
          {
            title: {
              es: 'Genera iteraciones',
              en: 'Generate iterations',
            },
            desc: {
              es: 'Por medio de testeos y pruebas, obtiene resultados relevantes que le permiten conocer cómo funciona el producto e identificar mejoras.',
              en: 'Through testing and experiments, obtains relevant results that allow understanding of how the product works and identification of improvements.',
            },
          },
          {
            title: {
              es: 'Realiza pruebas de usuario',
              en: 'Conduct user testing',
            },
            desc: {
              es: 'Una vez obtenido el producto final, lo pone a prueba con usuarios reales e identifica qué mejoras se pueden llevar a cabo.',
              en: 'Once the final product is obtained, tests it with real users and identifies what improvements can be made.',
            },
          },
        ],
      },
      {
        slug: 'ux-researcher',
        name: {
          es: 'UX Researcher',
          en: 'UX Researcher',
        },
        heroTitle: {
          es: 'Contrata a un UX Researcher para tu producto digital',
          en: 'Hire a UX Researcher for your digital product',
        },
        heroSubtitle: {
          es: 'Descubre insights valiosos para diseñar productos centrados en el usuario',
          en: 'Discover valuable insights to design user-centered products',
        },
        description: {
          es: 'Un UX Researcher se encarga de la investigación y estudio del usuario antes de diseñar cualquier producto digital. Gracias a este perfil se le puede dar contexto al proyecto y obtener datos importantes acerca de para quién se está diseñando y cuáles son sus necesidades. Por medio de sus investigaciones es posible obtener un buen producto final que se enfoque totalmente en el usuario.',
          en: 'A UX Researcher is responsible for researching and studying the user before designing any digital product. Thanks to this profile, context can be given to the project and important data obtained about who the design is for and what their needs are. Through their research it is possible to achieve a good final product that is entirely focused on the user.',
        },
        tasks: [
          {
            title: {
              es: 'Crea user personas',
              en: 'Create user personas',
            },
            desc: {
              es: 'Crea perfiles con características específicas que podrían ser clientes potenciales. Define sus metas, pain points, necesidades y su entorno.',
              en: 'Creates profiles with specific characteristics that could be potential customers. Defines their goals, pain points, needs and environment.',
            },
          },
          {
            title: {
              es: 'Pone a prueba el prototipo',
              en: 'Test the prototype',
            },
            desc: {
              es: 'A través de sesiones presenciales o remotas, hace diferentes pruebas con los usuarios meta para saber si el prototipo funciona o se le pueden hacer mejoras.',
              en: 'Through in-person or remote sessions, conducts different tests with target users to determine if the prototype works or can be improved.',
            },
          },
          {
            title: {
              es: 'Realiza investigación de campo',
              en: 'Conduct field research',
            },
            desc: {
              es: 'Lleva a cabo una investigación que se enfoca en estudiar al usuario en su entorno natural, para así poder obtener datos cualitativos.',
              en: 'Conducts research focused on studying the user in their natural environment in order to obtain qualitative data.',
            },
          },
          {
            title: {
              es: 'Verifica el producto',
              en: 'Verify the product',
            },
            desc: {
              es: 'Investiga a la competencia para saber si el producto es innovador y único. Estudia el mercado y lo que está sucediendo para poder anticipar cambios de consumo.',
              en: 'Researches the competition to determine if the product is innovative and unique. Studies the market and current trends to anticipate changes in consumer behavior.',
            },
          },
        ],
      },
      {
        slug: 'disenador-grafico',
        name: {
          es: 'Diseñador Gráfico',
          en: 'Graphic Designer',
        },
        heroTitle: {
          es: 'Contrata un Diseñador Gráfico para tus diseños digitales',
          en: 'Hire a Graphic Designer for your digital designs',
        },
        heroSubtitle: {
          es: 'Crea piezas visuales impactantes que refuercen la identidad de tu marca',
          en: 'Create impactful visual pieces that reinforce your brand identity',
        },
        description: {
          es: 'Un diseñador gráfico trabaja utilizando texto, imágenes y elementos gráficos como ilustraciones para lograr transmitir y reforzar el mensaje de la marca. Logra que los materiales sean visualmente atractivos para el usuario. También cuenta con conocimiento sobre colores y tipografías.',
          en: 'A graphic designer works using text, images and graphic elements such as illustrations to convey and reinforce the brand message. They make materials visually appealing to the user and also have knowledge of colors and typography.',
        },
        tasks: [
          {
            title: {
              es: 'Crea y diseña',
              en: 'Create and design',
            },
            desc: {
              es: 'Desarrolla gráficos e imágenes visuales o auditivas para todo tipo de proyectos, desde sitios web, hasta aplicaciones y redes sociales. Crea un producto desde cero o rediseña algún producto existente.',
              en: 'Develops visual or multimedia graphics and images for all types of projects, from websites to applications and social media. Creates a product from scratch or redesigns an existing one.',
            },
          },
          {
            title: {
              es: 'Crea un branding',
              en: 'Create branding',
            },
            desc: {
              es: 'Crea la identidad visual de la marca, desde el logo hasta los materiales visuales como ilustraciones que la identificarán y lograrán transmitir de forma clara su mensaje.',
              en: 'Creates the visual identity of the brand, from the logo to visual materials such as illustrations that will identify it and clearly convey its message.',
            },
          },
          {
            title: {
              es: 'Utiliza Software',
              en: 'Use software',
            },
            desc: {
              es: 'Utilizan programas de edición fotográfica, maquetación e ilustración digital para crear diseños únicos.',
              en: 'Uses photo editing, layout and digital illustration programs to create unique designs.',
            },
          },
          {
            title: {
              es: 'Actualiza los diseños',
              en: 'Update designs',
            },
            desc: {
              es: 'Modifica y actualiza los diseños con base en las opiniones de los usuarios y de los dueños de los proyectos.',
              en: 'Modifies and updates designs based on feedback from users and project owners.',
            },
          },
        ],
      },
      {
        slug: 'animador',
        name: {
          es: 'Animador',
          en: 'Animator',
        },
        heroTitle: {
          es: 'Contrata un Animador Web para tus animaciones Web',
          en: 'Hire a Web Animator for your web animations',
        },
        heroSubtitle: {
          es: 'Crea animaciones fluidas y modernas que potencian la experiencia digital',
          en: 'Create smooth and modern animations that enhance the digital experience',
        },
        description: {
          es: 'Un Animador diseña y le da vida a modelos, fondos, escenarios, personajes, objetos animados que pueden incluirse en cualquier producto digital, desde sitios web hasta aplicaciones móviles. Los animadores utilizan muchas técnicas y herramientas para lograr estos efectos especiales, como dibujos digitales, modelos en 3D y diversos programas de animación.',
          en: 'An Animator designs and brings to life models, backgrounds, scenarios, characters and animated objects that can be included in any digital product, from websites to mobile applications. Animators use many techniques and tools to achieve these special effects, such as digital drawings, 3D models and various animation programs.',
        },
        tasks: [
          {
            title: {
              es: 'Conceptualiza',
              en: 'Conceptualize',
            },
            desc: {
              es: 'Genera conceptos e ideas para personajes, escenas, fondos y otros elementos de animación que puedan usarse en un producto digital.',
              en: 'Generates concepts and ideas for characters, scenes, backgrounds and other animation elements that can be used in a digital product.',
            },
          },
          {
            title: {
              es: 'Planifica',
              en: 'Plan',
            },
            desc: {
              es: 'Crea sketches y storyboards a mano o digitales para proyectos de animación y se asegura de que sean ideales para después darles vida.',
              en: 'Creates hand-drawn or digital sketches and storyboards for animation projects, ensuring they are ideal before bringing them to life.',
            },
          },
          {
            title: {
              es: 'Diseña y anima',
              en: 'Design and animate',
            },
            desc: {
              es: 'Basándose en su investigación y bocetos, logra darle vida a imágenes en múltiples formatos, también en ocasiones puede generar audio para ellas.',
              en: 'Based on their research and sketches, brings images to life in multiple formats, and can also create audio for them on occasion.',
            },
          },
          {
            title: {
              es: 'Hace Research',
              en: 'Conduct research',
            },
            desc: {
              es: 'Investiga las tendencias y novedades del sector y aprende nuevas aplicaciones para entregar productos innovadores y de calidad.',
              en: 'Researches industry trends and innovations and learns new applications to deliver innovative and quality products.',
            },
          },
        ],
      },
      {
        slug: 'service-designer',
        name: {
          es: 'Service Designer',
          en: 'Service Designer',
        },
        heroTitle: {
          es: 'Contrata un Service Designer para diseñar experiencias de servicio excepcionales',
          en: 'Hire a Service Designer to design exceptional service experiences',
        },
        heroSubtitle: {
          es: 'Diseña servicios centrados en las personas para mejorar cada punto de contacto',
          en: 'Design people-centered services to improve every touchpoint',
        },
        description: {
          es: 'Un Service Designer se encarga de diseñar y optimizar los servicios de una empresa, creando experiencias fluidas y eficientes para los usuarios. Trabajan con equipos multidisciplinarios para comprender las necesidades de los usuarios y las expectativas del negocio, utilizando metodologías de diseño centrado en el usuario y mapeo de servicios.',
          en: 'A Service Designer is responsible for designing and optimizing a company\'s services, creating seamless and efficient experiences for users. They work with multidisciplinary teams to understand user needs and business expectations, using user-centered design methodologies and service mapping.',
        },
        tasks: [
          {
            title: {
              es: 'Investiga las necesidades del usuario',
              en: 'Research user needs',
            },
            desc: {
              es: 'Realiza investigaciones para comprender las necesidades, deseos y problemas de los usuarios, utilizando técnicas como entrevistas, encuestas y análisis de datos.',
              en: 'Conducts research to understand user needs, desires and problems, using techniques such as interviews, surveys and data analysis.',
            },
          },
          {
            title: {
              es: 'Define los puntos de contacto del servicio',
              en: 'Define service touchpoints',
            },
            desc: {
              es: 'Identifica y mapea todos los puntos de contacto entre los usuarios y el servicio, asegurando que la experiencia sea coherente, fluida y eficiente.',
              en: 'Identifies and maps all touchpoints between users and the service, ensuring the experience is coherent, seamless and efficient.',
            },
          },
          {
            title: {
              es: 'Diseña la experiencia del servicio',
              en: 'Design the service experience',
            },
            desc: {
              es: 'Desarrolla la arquitectura de servicios, creando un flujo de trabajo claro y eficiente que permita a los usuarios acceder al servicio de manera fácil y satisfactoria.',
              en: 'Develops the service architecture, creating a clear and efficient workflow that allows users to access the service easily and satisfactorily.',
            },
          },
          {
            title: {
              es: 'Colabora con equipos interdisciplinarios',
              en: 'Collaborate with interdisciplinary teams',
            },
            desc: {
              es: 'Trabaja junto a diseñadores, desarrolladores, expertos en marketing y operaciones para crear soluciones integradas.',
              en: 'Works alongside designers, developers, marketing and operations experts to create integrated solutions.',
            },
          },
          {
            title: {
              es: 'Prototipa y prueba soluciones',
              en: 'Prototype and test solutions',
            },
            desc: {
              es: 'Crea prototipos y pruebas de los servicios diseñados, validando con usuarios reales y ajustando el diseño según los comentarios.',
              en: 'Creates prototypes and tests of the designed services, validating with real users and adjusting the design based on feedback.',
            },
          },
          {
            title: {
              es: 'Evalúa la calidad del servicio',
              en: 'Evaluate service quality',
            },
            desc: {
              es: 'Monitorea y evalúa el desempeño de los servicios implementados, identificando áreas de mejora y optimización.',
              en: 'Monitors and evaluates the performance of implemented services, identifying areas for improvement and optimization.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'marketing',
    name: {
      es: 'Marketing',
      en: 'Marketing',
    },
    defaultProfile: 'digital-marketing-strategist',
    profiles: [
      {
        slug: 'digital-marketing-strategist',
        name: {
          es: 'Digital Marketing Strategist',
          en: 'Digital Marketing Strategist',
        },
        heroTitle: {
          es: 'Contrata un Digital Marketing Strategist para estrategia digital',
          en: 'Hire a Digital Marketing Strategist for your digital strategy',
        },
        heroSubtitle: {
          es: 'Diseña e implementa estrategias digitales que impulsan el crecimiento de tu negocio',
          en: 'Design and implement digital strategies that drive your business growth',
        },
        description: {
          es: 'Un Digital Marketing Strategist es la persona que por medio de diferentes medios y plataformas logra llegar a los usuarios y a los clientes potenciales para que compren tu servicio o el producto. Es responsable de identificar audiencias, segmentos y desplegar la estrategia de Marketing Digital para la captación de usuarios y clientes.',
          en: 'A Digital Marketing Strategist is the person who, through different media and platforms, reaches users and potential customers to get them to buy your service or product. They are responsible for identifying audiences, segments and deploying the Digital Marketing strategy for user and customer acquisition.',
        },
        tasks: [
          {
            title: {
              es: 'Crea campañas y publicidad',
              en: 'Create campaigns and advertising',
            },
            desc: {
              es: 'Crea, mide e implementa campañas completas para alcanzar los objetivos de tu proyecto. También crea publicidad con base en objetivos específicos y con una estrategia definida.',
              en: 'Creates, measures and implements complete campaigns to achieve your project objectives. Also creates advertising based on specific goals and a defined strategy.',
            },
          },
          {
            title: {
              es: 'Genera estrategias',
              en: 'Generate strategies',
            },
            desc: {
              es: 'Investiga a tu público y analiza las tendencias para poder crear la estrategia digital adecuada para tu marca.',
              en: 'Researches your audience and analyzes trends to create the right digital strategy for your brand.',
            },
          },
          {
            title: {
              es: 'Genera reportes y da soluciones',
              en: 'Generate reports and provide solutions',
            },
            desc: {
              es: 'Obtiene, observa y analiza las métricas en diversas plataformas para monitorear cómo ha reaccionado el usuario a tu producto y busca áreas de oportunidad.',
              en: 'Obtains, observes and analyzes metrics across various platforms to monitor how users have responded to your product and identifies areas of opportunity.',
            },
          },
          {
            title: {
              es: 'Mejora el contenido',
              en: 'Improve content',
            },
            desc: {
              es: 'Conoce las últimas tendencias y la lógica de los algoritmos para poder optimizar la presencia digital de tu marca por medio de herramientas como SEO y SEM.',
              en: 'Stays current on the latest trends and algorithm logic to optimize your brand\'s digital presence through tools such as SEO and SEM.',
            },
          },
        ],
      },
      {
        slug: 'seo-strategist',
        name: {
          es: 'SEO Strategist',
          en: 'SEO Strategist',
        },
        heroTitle: {
          es: 'Contrata un SEO Strategist para tu página web',
          en: 'Hire an SEO Strategist for your website',
        },
        heroSubtitle: {
          es: 'Optimiza tu sitio web para destacar en buscadores y atraer más clientes',
          en: 'Optimize your website to stand out in search engines and attract more customers',
        },
        description: {
          es: 'Un SEO Strategist se encarga de aumentar el tráfico del sitio web orgánicamente por medio de los motores de búsqueda. Utiliza aspectos como la búsqueda de palabras clave, la creación de contenidos, la creación de enlaces y las auditorías técnicas de los sitios web.',
          en: 'An SEO Strategist is responsible for increasing website traffic organically through search engines. They use aspects such as keyword research, content creation, link building and technical website audits.',
        },
        tasks: [
          {
            title: {
              es: 'Crea contenido',
              en: 'Create content',
            },
            desc: {
              es: 'Genera blogs, infografías o ebooks que ayuden a dar visibilidad a la marca y atraer tráfico al sitio web.',
              en: 'Generates blogs, infographics or ebooks that help give visibility to the brand and attract traffic to the website.',
            },
          },
          {
            title: {
              es: 'Hacen keyword research',
              en: 'Conduct keyword research',
            },
            desc: {
              es: 'Determina qué palabras clave son las más relevantes para cada cliente en los motores de búsqueda y con base en ellas genera los contenidos.',
              en: 'Determines which keywords are most relevant for each client in search engines and creates content based on them.',
            },
          },
          {
            title: {
              es: 'Investiga a la competencia',
              en: 'Research the competition',
            },
            desc: {
              es: 'Analiza y estudia otros sitios para identificar oportunidades que mejoren la búsqueda orgánica.',
              en: 'Analyzes and studies other sites to identify opportunities that improve organic search.',
            },
          },
          {
            title: {
              es: 'Generan links internos',
              en: 'Build internal links',
            },
            desc: {
              es: 'Implementa una estrategia de links para que los usuarios naveguen entre diferentes páginas dentro del sitio y se generen más clicks y tráfico.',
              en: 'Implements a link strategy so users navigate between different pages within the site, generating more clicks and traffic.',
            },
          },
        ],
      },
      {
        slug: 'sem-strategist',
        name: {
          es: 'SEM Strategist',
          en: 'SEM Strategist',
        },
        heroTitle: {
          es: 'Contrata un SEM Strategist para tu página web',
          en: 'Hire an SEM Strategist for your website',
        },
        heroSubtitle: {
          es: 'Diseña y gestiona campañas pagadas que generan resultados medibles',
          en: 'Design and manage paid campaigns that generate measurable results',
        },
        description: {
          es: 'Un SEM Strategist se especializa en campañas de marketing en motores de búsqueda, se encarga de identificar oportunidades y tendencias para lograrlo. Su objetivo principal es obtener tráfico de búsqueda no sólo orgánica sino también de pago.',
          en: 'An SEM Strategist specializes in search engine marketing campaigns and is responsible for identifying opportunities and trends to achieve this. Their main objective is to obtain search traffic not only organically but also through paid channels.',
        },
        tasks: [
          {
            title: {
              es: 'Hacer research',
              en: 'Conduct research',
            },
            desc: {
              es: 'Ejecuta pruebas, recopila datos y los analiza para lograr el máximo rendimiento de las campañas de pago.',
              en: 'Runs tests, collects data and analyzes it to achieve maximum performance from paid campaigns.',
            },
          },
          {
            title: {
              es: 'Gestiona el presupuesto',
              en: 'Manage the budget',
            },
            desc: {
              es: 'Gestiona los gastos de las campañas, se ajusta al presupuesto y estima los costes mensuales.',
              en: 'Manages campaign expenses, adjusts to the budget and estimates monthly costs.',
            },
          },
          {
            title: {
              es: 'Optimiza textos',
              en: 'Optimize copy',
            },
            desc: {
              es: 'Se asegura de que todo el texto de las campañas se encuentre optimizado para su correcto posicionamiento en los motores de búsqueda.',
              en: 'Ensures all campaign copy is optimized for correct positioning in search engines.',
            },
          },
          {
            title: {
              es: 'Genera informes',
              en: 'Generate reports',
            },
            desc: {
              es: 'Analiza los datos del sitio y resultados de las campañas para identificar errores y posibles áreas de oportunidad en un futuro.',
              en: 'Analyzes site data and campaign results to identify errors and possible areas of opportunity in the future.',
            },
          },
        ],
      },
      {
        slug: 'community-manager',
        name: {
          es: 'Community Manager',
          en: 'Community Manager',
        },
        heroTitle: {
          es: 'Contrata un Community Manager para la interacción con tu audiencia',
          en: 'Hire a Community Manager for interaction with your audience',
        },
        heroSubtitle: {
          es: 'Gestiona y potencia la presencia de tu marca en redes sociales',
          en: 'Manage and enhance your brand presence on social media',
        },
        description: {
          es: 'Un Community Manager es la persona que conecta a una empresa o marca con sus usuarios y su comunidad y fomenta su participación. Se encarga de la parte de comunicación, manejo de redes sociales y sus métricas, relaciones públicas y creación de contenido.',
          en: 'A Community Manager is the person who connects a company or brand with its users and community and encourages their participation. They handle communication, social media management and its metrics, public relations and content creation.',
        },
        tasks: [
          {
            title: {
              es: 'Ejecuta campañas',
              en: 'Execute campaigns',
            },
            desc: {
              es: 'Pone en marcha campañas de comunicación y redes sociales que estén alineadas con los objetivos de marketing.',
              en: 'Launches communication and social media campaigns that are aligned with marketing objectives.',
            },
          },
          {
            title: {
              es: 'Interactúa con los usuarios',
              en: 'Interact with users',
            },
            desc: {
              es: 'Responde a los comentarios y dudas de los clientes y está activo dentro de la comunidad de la marca para generar engagement y establecer relaciones con clientes potenciales.',
              en: 'Responds to customer comments and questions and is active within the brand community to generate engagement and build relationships with potential customers.',
            },
          },
          {
            title: {
              es: 'Genera reportes',
              en: 'Generate reports',
            },
            desc: {
              es: 'Presenta reportes periódicos con las métricas de las redes sociales, como el engagement, visitas, clicks en posts y determina qué ha funcionado y qué se puede mejorar.',
              en: 'Presents periodic reports with social media metrics such as engagement, visits, post clicks and determines what has worked and what can be improved.',
            },
          },
          {
            title: {
              es: 'Crea contenido',
              en: 'Create content',
            },
            desc: {
              es: 'Puede crear contenidos atractivos en texto, imagen y video para su publicación en redes sociales y plataformas.',
              en: 'Can create attractive content in text, image and video format for publication on social media and platforms.',
            },
          },
        ],
      },
    ],
  },
]

// Helper functions
export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug)
}

export function getProfileBySlug(categorySlug: string, profileSlug: string): Profile | undefined {
  const category = getCategoryBySlug(categorySlug)
  return category?.profiles.find(p => p.slug === profileSlug)
}

export function getCategoryForProfile(profileSlug: string): Category | undefined {
  return CATEGORIES.find(c => c.profiles.some(p => p.slug === profileSlug))
}
