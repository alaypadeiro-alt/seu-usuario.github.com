import { useState } from "react";
import { ToolCard } from "@/components/ToolCard";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tools, categories } from "@/data/tools";
import { Search, Mail } from "lucide-react";

export default function Home() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Mapear categorias para o idioma
  const getCategoryName = (category: string): string => {
    const categoryMap: Record<string, string> = {
      "Todos": t("tools.categories.all"),
      "Chatbots": t("tools.categories.chatbots"),
      "Image Generators": t("tools.categories.imageGenerators"),
      "Code Assistants": t("tools.categories.codeAssistants"),
      "Writing Tools": t("tools.categories.writingTools"),
      "Productivity": t("tools.categories.productivity"),
    };
    return categoryMap[category] || category;
  };

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategory === "Todos" || tool.category === selectedCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              AI
            </div>
            <span className="font-bold text-lg text-foreground">{t("nav.brand")}</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#tools" className="text-sm text-muted-foreground hover:text-foreground transition">
              {t("nav.tools")}
            </a>
            <a href="#newsletter" className="text-sm text-muted-foreground hover:text-foreground transition">
              {t("nav.newsletter")}
            </a>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/gGotYcM8JXAasvTqz6sSPE/sandbox/BiJHyCa5TvWBH8T4B8gFfW-img-1_1770860596000_na1fn_aGVyby1haS10b29scw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0dvdFljTThKWEFhc3ZUcXo2c1NQRS9zYW5kYm94L0JpSkh5Q2E1VHZXQkg4VDRCOGdGZlctaW1nLTFfMTc3MDg2MDU5NjAwMF9uYTFmbl9hR1Z5YnkxaGFTMTBiMjlzY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=W6z-I~ucx0ocHY-mUrgOlDBN2HUcd33yzmFjJEZ~G-6w84KqSIwmIxpTh18Ut2LXDLNeAXNT27RFMc~F7vt0POvOcAh-vFcIMtt9dvd61sK7dYEsmZzcS6AIhzdCoNc4H5aHL8K0mSb2sAwHx5UVttUdaFbuU03bObJYaSTJotuWZttNs032Urxw~9MKcTWXTKiFXI3qUnCaX1DRu4YxIk3DRi5iKtDHXsiLU2y0Ca1QJK7lsOhzvQw3xrmicSn2ZQ~uFFBLv62NwMdSUXbVCEV7Mmjj1xywVZZvAsUTTwW0ueVAbqkbFQsQVyM6NuPLHUikzGjLffKNG25wrfZAJA__')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t("hero.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("hero.description")}
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {t("hero.cta1")}
              </Button>
              <Button size="lg" variant="outline">
                {t("hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t("tools.section")}</h2>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder={t("tools.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background border-border"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {getCategoryName(category)}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">{t("tools.noResults")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("newsletter.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("newsletter.description")}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-3">
            <Input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-background border-border"
            />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              <Mail size={18} />
              <span className="hidden sm:inline">{t("newsletter.button")}</span>
            </Button>
          </form>

          {subscribed && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
              {t("newsletter.success")}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">{t("footer.brand")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("footer.description")}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#tools" className="hover:text-foreground transition">{t("nav.tools")}</a></li>
                <li><a href="#newsletter" className="hover:text-foreground transition">{t("nav.newsletter")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">{t("footer.contact")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("footer.contactText")}<br />
                <a href="mailto:contato@aitools.hub" className="text-primary hover:underline">contato@aitools.hub</a>
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
