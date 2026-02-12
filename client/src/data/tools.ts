export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  affiliateLink: string;
  rating: number;
  reviews: number;
  price: string;
  features: string[];
  badge?: string;
}

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "O assistente de IA mais popular do mundo. Perfeito para escrita, análise, programação e muito mais.",
    category: "Chatbots",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gGotYcM8JXAasvTqz6sSPE/sandbox/BiJHyCa5TvWBH8T4B8gFfW-img-2_1770860594000_na1fn_dG9vbHMtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0dvdFljTThKWEFhc3ZUcXo2c1NQRS9zYW5kYm94L0JpSkh5Q2E1VHZXQkg4VDRCOGdGZlctaW1nLTJfMTc3MDg2MDU5NDAwMF9uYTFmbl9kRzl2YkhNdGFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjU8fNEuIbccmK9BIQw-OQeAUfzHHgBl6Dih9YDpe6q3tGNu6VhGkR9WocjaAhF2geUcv2qbng2cu-U3i56FDLO6~zoyDD18m0lgDX~18US2HXaVR5UcrWruCGQHA5K7vthv~7yJLrTiCw1n2ppfuSL1Xj4RXFmb-gEGa6C1jTIfvGBSnWriKIDepu~rrt94MQyzL9wIyia0O4wkgRnNhIvFO-ZFn6HhrwQhmFXzfhvQz5m3NIyo1epARI2bFvcYXSMTV2HCtPEMC10eUZUdg4jq3WxA5Aqgqeb1VSijeJyfPcJNkZb5UtER8XQw7VgB4bHbgakOHlUwG2ruSC37BQ__",
    affiliateLink: "https://chat.openai.com",
    rating: 4.8,
    reviews: 2543,
    price: "Grátis / $20/mês",
    features: ["Conversas ilimitadas", "Análise de documentos", "Geração de código", "Busca na web"],
    badge: "Popular"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Gerador de imagens por IA de alta qualidade. Crie arte, designs e ilustrações profissionais em segundos.",
    category: "Image Generators",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gGotYcM8JXAasvTqz6sSPE/sandbox/BiJHyCa5TvWBH8T4B8gFfW-img-2_1770860594000_na1fn_dG9vbHMtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0dvdFljTThKWEFhc3ZUcXo2c1NQRS9zYW5kYm94L0JpSkh5Q2E1VHZXQkg4VDRCOGdGZlctaW1nLTJfMTc3MDg2MDU5NDAwMF9uYTFmbl9kRzl2YkhNdGFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjU8fNEuIbccmK9BIQw-OQeAUfzHHgBl6Dih9YDpe6q3tGNu6VhGkR9WocjaAhF2geUcv2qbng2cu-U3i56FDLO6~zoyDD18m0lgDX~18US2HXaVR5UcrWruCGQHA5K7vthv~7yJLrTiCw1n2ppfuSL1Xj4RXFmb-gEGa6C1jTIfvGBSnWriKIDepu~rrt94MQyzL9wIyia0O4wkgRnNhIvFO-ZFn6HhrwQhmFXzfhvQz5m3NIyo1epARI2bFvcYXSMTV2HCtPEMC10eUZUdg4jq3WxA5Aqgqeb1VSijeJyfPcJNkZb5UtER8XQw7VgB4bHbgakOHlUwG2ruSC37BQ__",
    affiliateLink: "https://www.midjourney.com",
    rating: 4.7,
    reviews: 1876,
    price: "$10-120/mês",
    features: ["Geração rápida", "Upscaling de imagens", "Variações infinitas", "Modo neon"],
    badge: "Premium"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "Assistente de código alimentado por IA. Escreva código mais rápido com sugestões inteligentes.",
    category: "Code Assistants",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gGotYcM8JXAasvTqz6sSPE/sandbox/BiJHyCa5TvWBH8T4B8gFfW-img-2_1770860594000_na1fn_dG9vbHMtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0dvdFljTThKWEFhc3ZUcXo2c1NQRS9zYW5kYm94L0JpSkh5Q2E1VHZXQkg4VDRCOGdGZlctaW1nLTJfMTc3MDg2MDU5NDAwMF9uYTFmbl9kRzl2YkhNdGFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjU8fNEuIbccmK9BIQw-OQeAUfzHHgBl6Dih9YDpe6q3tGNu6VhGkR9WocjaAhF2geUcv2qbng2cu-U3i56FDLO6~zoyDD18m0lgDX~18US2HXaVR5UcrWruCGQHA5K7vthv~7yJLrTiCw1n2ppfuSL1Xj4RXFmb-gEGa6C1jTIfvGBSnWriKIDepu~rrt94MQyzL9wIyia0O4wkgRnNhIvFO-ZFn6HhrwQhmFXzfhvQz5m3NIyo1epARI2bFvcYXSMTV2HCtPEMC10eUZUdg4jq3WxA5Aqgqeb1VSijeJyfPcJNkZb5UtER8XQw7VgB4bHbgakOHlUwG2ruSC37BQ__",
    affiliateLink: "https://github.com/features/copilot",
    rating: 4.6,
    reviews: 1234,
    price: "$10/mês",
    features: ["Sugestões de código", "Testes automáticos", "Documentação", "Suporte a múltiplas linguagens"],
    badge: "Desenvolvedor"
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "Ferramenta de escrita por IA para conteúdo de marketing. Crie copy persuasivo em minutos.",
    category: "Writing Tools",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gGotYcM8JXAasvTqz6sSPE/sandbox/BiJHyCa5TvWBH8T4B8gFfW-img-2_1770860594000_na1fn_dG9vbHMtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0dvdFljTThKWEFhc3ZUcXo2c1NQRS9zYW5kYm94L0JpSkh5Q2E1VHZXQkg4VDRCOGdGZlctaW1nLTJfMTc3MDg2MDU5NDAwMF9uYTFmbl9kRzl2YkhNdGFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjU8fNEuIbccmK9BIQw-OQeAUfzHHgBl6Dih9YDpe6q3tGNu6VhGkR9WocjaAhF2geUcv2qbng2cu-U3i56FDLO6~zoyDD18m0lgDX~18US2HXaVR5UcrWruCGQHA5K7vthv~7yJLrTiCw1n2ppfuSL1Xj4RXFmb-gEGa6C1jTIfvGBSnWriKIDepu~rrt94MQyzL9wIyia0O4wkgRnNhIvFO-ZFn6HhrwQhmFXzfhvQz5m3NIyo1epARI2bFvcYXSMTV2HCtPEMC10eUZUdg4jq3WxA5Aqgqeb1VSijeJyfPcJNkZb5UtER8XQw7VgB4bHbgakOHlUwG2ruSC37BQ__",
    affiliateLink: "https://www.jasper.ai",
    rating: 4.5,
    reviews: 987,
    price: "$39-125/mês",
    features: ["Templates de copy", "Brand voice", "Análise SEO", "Integração com ferramentas"],
    badge: "Marketing"
  },
  {
    id: "dallae",
    name: "DALL-E 3",
    description: "Gerador de imagens avançado da OpenAI. Crie imagens realistas e artísticas.",
    category: "Image Generators",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gGotYcM8JXAasvTqz6sSPE/sandbox/BiJHyCa5TvWBH8T4B8gFfW-img-2_1770860594000_na1fn_dG9vbHMtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0dvdFljTThKWEFhc3ZUcXo2c1NQRS9zYW5kYm94L0JpSkh5Q2E1VHZXQkg4VDRCOGdGZlctaW1nLTJfMTc3MDg2MDU5NDAwMF9uYTFmbl9kRzl2YkhNdGFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjU8fNEuIbccmK9BIQw-OQeAUfzHHgBl6Dih9YDpe6q3tGNu6VhGkR9WocjaAhF2geUcv2qbng2cu-U3i56FDLO6~zoyDD18m0lgDX~18US2HXaVR5UcrWruCGQHA5K7vthv~7yJLrTiCw1n2ppfuSL1Xj4RXFmb-gEGa6C1jTIfvGBSnWriKIDepu~rrt94MQyzL9wIyia0O4wkgRnNhIvFO-ZFn6HhrwQhmFXzfhvQz5m3NIyo1epARI2bFvcYXSMTV2HCtPEMC10eUZUdg4jq3WxA5Aqgqeb1VSijeJyfPcJNkZb5UtER8XQw7VgB4bHbgakOHlUwG2ruSC37BQ__",
    affiliateLink: "https://openai.com/dall-e-3",
    rating: 4.7,
    reviews: 1543,
    price: "$0.08-0.12 por imagem",
    features: ["Qualidade ultra-alta", "Edição de imagens", "Variações", "Estilo artístico"],
    badge: "Novo"
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Integração de IA dentro do Notion. Escreva, edite e organize com ajuda de IA.",
    category: "Productivity",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/gGotYcM8JXAasvTqz6sSPE/sandbox/BiJHyCa5TvWBH8T4B8gFfW-img-2_1770860594000_na1fn_dG9vbHMtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0dvdFljTThKWEFhc3ZUcXo2c1NQRS9zYW5kYm94L0JpSkh5Q2E1VHZXQkg4VDRCOGdGZlctaW1nLTJfMTc3MDg2MDU5NDAwMF9uYTFmbl9kRzl2YkhNdGFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjU8fNEuIbccmK9BIQw-OQeAUfzHHgBl6Dih9YDpe6q3tGNu6VhGkR9WocjaAhF2geUcv2qbng2cu-U3i56FDLO6~zoyDD18m0lgDX~18US2HXaVR5UcrWruCGQHA5K7vthv~7yJLrTiCw1n2ppfuSL1Xj4RXFmb-gEGa6C1jTIfvGBSnWriKIDepu~rrt94MQyzL9wIyia0O4wkgRnNhIvFO-ZFn6HhrwQhmFXzfhvQz5m3NIyo1epARI2bFvcYXSMTV2HCtPEMC10eUZUdg4jq3WxA5Aqgqeb1VSijeJyfPcJNkZb5UtER8XQw7VgB4bHbgakOHlUwG2ruSC37BQ__",
    affiliateLink: "https://www.notion.so/ai",
    rating: 4.6,
    reviews: 1098,
    price: "$10/mês adicional",
    features: ["Escrita assistida", "Resumos", "Tradução", "Brainstorming"],
    badge: "Produtividade"
  }
];

export const categories = ["Todos", "Chatbots", "Image Generators", "Code Assistants", "Writing Tools", "Productivity"];
