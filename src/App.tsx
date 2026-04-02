import { motion } from "motion/react";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Terminal, 
  Layers, 
  MoveRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Nebula Strider",
    description: "複雑な重力物理学とダイナミックなNPCエコシステムを特徴とする、プロシージャルな宇宙探索ゲーム。",
    tags: ["UNITY", "C#"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLImcME3H8ZEB8b7Sl1Plkp4vpG6VvXmltyAbNIgUHn2vPY6QjhnBEerodqvHX5uOlBqaJr7qF_SC0dkng9IBiHtc6bLWXQ20rq2k-u4CE493LclMG0FqTqGvWvnr9VNYbYw9JcAXS5C-nMFggAgx-ilYb3DgAkV6T6_t2uonzgKbUjdHDKd60DrQUPkTUqKOMTIhLGyuiv5_Eab0dS6y-uTzO3hW5tq1divKwkdl4Bp1rK_70wOOWqYJX1AfWo9Uex6US9RFmGRY",
    colSpan: "md:col-span-8"
  },
  {
    id: 2,
    title: "Kinetic Habits",
    description: "日々のマイクロルーチンを通じて認知パフォーマンスを追跡するためのクオンティファイド・セルフ（自己定量化）ツール。",
    tags: ["FLUTTER"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfKAdRl4FRJ0hJbEMA0s3vNDzVUIDNq6g1uKsonAWu81zOXj4MuszzRy6OKpfZP7dYW0lu8lyhkMu2xS_tgIQuYe7fXx3_5aENd_MF2IxydoX1rn4tRWrvXhNDkzxFchlCbitX_2ajZhb-lLNESaMQUzxxaC2V9RZHS-i2YESP-YgNP7A5v0xAKdHLJHSwv8Gc_u9NuBqW9K64v-2tHru2WogaOLpdKVEnJy6totBXMUVbzxsVuWBBRzL8ElYFwF8d9xbDg8_oAcM",
    colSpan: "md:col-span-4"
  },
  {
    id: 3,
    title: "Syntax Parser v2.0",
    description: "NLPを使用して、複雑なレガシーコードベースを人間が読める技術的なブループリントに変換する自動ドキュメント生成ツール。",
    tags: ["PYTHON", "AI"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFHkpLrBn68E3j2RAimtTlqm7fPHsw9fzn101Z_DK20vhEW3zK4n6LsmPFnlEVnzYHzxFCAGDJo76MeFYG5qnVJgDeVa-SvRESgWSU5FRbf2k-q9v9VTwqVvYQHofn-QpLaeTTYJ4WWOTt0cgrsprVbNoGGlxeke_FY8TIX8aO-QGJoRlUBBupcPa0XsfIPSyacD4QQ_XOpaW_fE2P7UHRwLfPmZ1Bz70haxIKsTrI-G2_a67tkB2faWNEkndAr7P71QF06zOwOyY",
    colSpan: "md:col-span-12",
    horizontal: true
  }
];

const skills = [
  { name: "C#", icon: Code },
  { name: "Unity", icon: Layers },
  { name: "Swift", icon: Smartphone },
  { name: "Flutter", icon: Layers },
  { name: "Python", icon: Terminal },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-on-surface/5">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4 w-full">
          <div className="text-xl font-bold tracking-tighter text-primary font-headline">
            The Academic Curator
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[["ホーム", "home"], ["プロジェクト", "projects"], ["アバウト", "about"], ["コンタクト", "contact"]].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`font-headline tracking-tight font-semibold transition-colors duration-300 ${
                  id === "home" ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2 rounded-full font-semibold scale-95 active:scale-90 transition-transform hidden sm:block">
              お問い合わせ
            </button>
            <button 
              className="md:hidden p-2 text-on-surface"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-on-surface/5 px-6 py-4 flex flex-col gap-4"
          >
            {[["ホーム", "home"], ["プロジェクト", "projects"], ["アバウト", "about"], ["コンタクト", "contact"]].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-headline font-semibold text-on-surface-variant"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold w-full">
              お問い合わせ
            </button>
          </motion.div>
        )}
      </nav>

      <main className="pt-20 geometric-pattern">
        {/* Hero Section */}
        <section id="home" className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-4xl"
          >
            <span className="inline-block px-3 py-1 rounded-sm bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest font-semibold">
              コラボレーション受付中
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9]">
              秋月 元
            </h1>
            <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary/80 tracking-tight">
              クリエイティブデベロッパー & 学生
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mt-8 max-w-2xl font-body">
              複雑なロジックを没入感のあるデジタル体験へと変換します。現在は、プロシージャルなゲームメカニクスと人間中心のアプリケーションデザインの交差点に焦点を当てています。
            </p>
            <div className="pt-10 flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                プロジェクトを見る
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="text-on-surface font-semibold hover:underline decoration-primary underline-offset-8 px-4 py-4 transition-all">
                履歴書を表示
              </button>
            </div>
          </motion.div>
        </section>

        {/* Curated Works Section */}
        <section id="projects" className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div className="max-w-xl">
                <h3 className="text-4xl font-headline font-bold tracking-tight mb-4">厳選された作品</h3>
                <p className="text-on-surface-variant font-body">高性能なゲームエンジンからユーティリティ重視のモバイルアプリケーションまで、技術的な探求のセレクション。</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`${project.colSpan} group cursor-pointer`}
                >
                  <div className={`bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:bg-white shadow-sm hover:shadow-md flex flex-col ${project.horizontal ? 'md:flex-row' : ''}`}>
                    <div className={`${project.horizontal ? 'md:w-1/2 h-64 md:h-80' : 'aspect-video w-full'} overflow-hidden`}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className={`p-8 ${project.horizontal ? 'md:w-1/2 md:p-12' : 'flex-1'}`}>
                      <div className="flex gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="bg-secondary-container text-on-secondary-container text-[10px] font-label px-2 py-0.5 rounded-sm font-bold tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className={`${project.horizontal ? 'text-3xl' : 'text-2xl'} font-headline font-bold mb-2`}>
                        {project.title}
                      </h4>
                      <p className={`text-on-surface-variant font-body ${project.horizontal ? 'text-lg leading-relaxed mb-6' : 'text-sm'}`}>
                        {project.description}
                      </p>
                      {project.horizontal && (
                        <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                          ドキュメントを見る <MoveRight size={20} />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Proficiency Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 border border-on-surface/5">
            <div className="md:max-w-md">
              <h3 className="text-3xl font-headline font-bold tracking-tight mb-4">テクニカルスキル</h3>
              <p className="text-on-surface-variant font-body">私のツールキットは、単なるトレンドではなく、アーキテクチャに適したツールを選択するという哲学に基づいています。</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end flex-1">
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 bg-surface-container-low p-6 rounded-lg w-32 border border-on-surface/5 transition-colors hover:bg-white"
                >
                  <skill.icon className="text-primary" size={32} />
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-on-surface/5 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8 gap-8">
          <div className="font-body text-sm uppercase tracking-widest text-on-surface-variant/60 font-semibold">
            © 2024 The Academic Curator. Built with Technical Soul.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["LinkedIn", "GitHub", "Twitter", "Email"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-on-surface-variant/60 font-body text-sm uppercase tracking-widest hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all font-semibold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
