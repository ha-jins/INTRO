import { Link } from "react-router-dom";

export default function Intoro() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4 w-full">
          <span className="text-xl font-bold tracking-tighter text-blue-700 font-headline">The Academic Curator</span>
          <div className="hidden md:flex items-center gap-8 font-manrope tracking-tight font-semibold">
            <Link className="text-slate-600 font-medium hover:text-blue-600 transition-colors duration-300" to="/">ホーム</Link>
            <Link className="text-slate-600 font-medium hover:text-blue-600 transition-colors duration-300" to="/#projects">プロジェクト</Link>
            <Link className="text-blue-700 border-b-2 border-blue-700 pb-1 hover:text-blue-600 transition-colors duration-300" to="/intoro">経歴について</Link>
            <Link className="text-slate-600 font-medium hover:text-blue-600 transition-colors duration-300" to="/#contact">お問い合わせ</Link>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-semibold scale-95 active:scale-90 transition-transform duration-300">
            お問い合わせ
          </button>
        </div>
      </nav>
      <main className="pt-32 pb-16 px-8 max-w-7xl mx-auto">
        {/* Profile Section */}
        <section className="mb-24 flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-5/12 relative">
            <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-sm">
              <img alt="プロフェッショナルなポートレート" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW4KxKYLJ0UZv-FqTs3Ff0otuq4x5NYp8-QBYSamYL0r_j5JbbuSoVUv0M3tZ50LxP9awHlYdkPP1oAs0rHXn3NnWAthzQHDsn8bCgIpKJ-eltfOocwdTIeT_qBmIbZ8UOZEY7c_3VTLBiAp1H4As4TqYGZltbUh31PJbkET-QIr2x-aICq8lFI3LVis1wNIMdsPICFKmBZlHQ05zxZ6Vj_OJfYtyhAWdj2vMl2MNoW8nWGNXBY1BjlF2hpIOd_c_nggG4GXSKtmo" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/15 hidden lg:block">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">school</span>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-outline">Candidate</p>
                  <p className="font-headline font-bold text-primary">Class of 2028</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 mt-4 md:pl-8">
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
              技術への情熱と<br /><span className="text-primary italic">論理的思考</span>の融合
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
              私は、ヒューマンコンピュータインタラクションとゲームデザインの交差点に焦点を当てた開発者です。高校時代のハッカソンから始まった私の情熱は、現在、コンピュータサイエンスにおける学術的な卓越性の追求へと進化しています。
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-outline-variant/15">
              <div>
                <h4 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">コア哲学</h4>
                <p className="font-headline font-bold text-lg">エンジニアリングにおける倫理</p>
              </div>
              <div>
                <h4 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">主要目標</h4>
                <p className="font-headline font-bold text-lg">スケーラブルな共感</p>
              </div>
            </div>
          </div>
        </section>
        {/* Education & Achievements (Asymmetric Grid) */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-px bg-outline-variant/20 flex-grow"></span>
            <h2 className="font-headline font-bold text-3xl tracking-tight">学歴 (Academic Narrative)</h2>
            <span className="h-px bg-outline-variant/20 w-12"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education Timeline */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden group hover:bg-surface-bright transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">history_edu</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-sm font-label text-xs font-semibold">2021 — 2024</span>
                  <span className="text-outline">高等学校 卒業見込み</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-2">科学技術アカデミー (Science & Technology Academy)</h3>
                <p className="text-on-surface-variant mb-4">GPA: 4.0/4.0 • 総代候補。AP物理およびAPコンピュータサイエンスAに重点を置いたカリキュラムを履修。</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container-high rounded-sm text-[10px] font-bold text-on-surface uppercase tracking-wider">AP CS A</span>
                  <span className="px-2 py-1 bg-surface-container-high rounded-sm text-[10px] font-bold text-on-surface uppercase tracking-wider">AP Calculus BC</span>
                  <span className="px-2 py-1 bg-surface-container-high rounded-sm text-[10px] font-bold text-on-surface uppercase tracking-wider">ロボティクス・リード</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl relative group hover:bg-surface-bright transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-sm font-label text-xs font-semibold">2023 夏季</span>
                  <span className="text-outline">プレカレッジプログラム</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-2">スタンフォード大学</h3>
                <p className="text-on-surface-variant">「AI倫理と仕事の未来」に関する集中セミナーを履修。レコメンデーションアルゴリズムにおけるバイアスについての研究を実施。</p>
              </div>
            </div>
            {/* Awards Side Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-container-low p-8 rounded-xl flex-grow">
                <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">stars</span>
                  表彰・活動 (Awards & Accolades)
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-outline-variant mt-1">award_star</span>
                    <div>
                      <p className="font-bold text-on-surface">National Merit Scholar</p>
                      <p className="text-sm text-on-surface-variant">全国の標準テスト受験者の中で上位1%に選出。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-outline-variant mt-1">code_blocks</span>
                    <div>
                      <p className="font-bold text-on-surface">市主催ハッカソン 優勝</p>
                      <p className="text-sm text-on-surface-variant">地元の都市型農場向けに、IoTを活用した節水アプリを開発。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-outline-variant mt-1">military_tech</span>
                    <div>
                      <p className="font-bold text-on-surface">イーグルスカウト (Eagle Scout)</p>
                      <p className="text-sm text-on-surface-variant">20名のチームを率い、地域の歴史アーカイブのデジタル化プロジェクトを遂行。</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Skills & Proficiencies (Bento-style Grid) */}
        <section className="mb-32">
          <h2 className="font-headline font-bold text-3xl tracking-tight mb-12 text-center">技術習得状況 (Technical Proficiency)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skill Card: Development */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">terminal</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-6">ソフトウェア開発</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Java / C#</span>
                    <span className="text-outline">95%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Python (データサイエンス)</span>
                    <span className="text-outline">80%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Skill Card: Game Engines */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container">videogame_asset</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-6">インタラクティブメディア</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Unity Engine</span>
                    <span className="text-outline">90%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">3Dモデリング (Blender)</span>
                    <span className="text-outline">65%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[65%]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Skill Card: Research */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-tertiary-container/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">biotech</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-6">研究・ロジック</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">統計分析</span>
                    <span className="text-outline">75%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">テクニカルライティング</span>
                    <span className="text-outline">85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Values & Future Goals */}
        <section className="mb-32 py-16 bg-surface-container-low rounded-xl px-12 overflow-hidden relative">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-headline font-bold text-3xl mb-8">価値観 (Personal Values)</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="text-4xl font-headline font-extrabold text-outline-variant/30">01</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">徹底した透明性</h4>
                    <p className="text-on-surface-variant">厳格な検証と協力的な改善を可能にするオープンソースシステムの構築。</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-4xl font-headline font-extrabold text-outline-variant/30">02</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">包括的なインタラクション</h4>
                    <p className="text-on-surface-variant">ニューロダイバージェント（神経多様性）ユーザーのアクセシビリティを優先したデジタル空間の設計。</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-headline font-bold text-3xl mb-8">5年後のビジョン (The Five-Year Vision)</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant mb-6">
                大学進学にあたり、私の目標は人工知能の数学的基礎をマスターすることです。ゲームが単なる娯楽ではなく、複雑な問題解決や感情調整のためのセラピー的なツールとなる未来を描いています。
              </p>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                テクノロジーの消費者から、公共の利益に資する digital 体験の「キュレーター」へと転身することを目指しています。
              </p>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16" id="contact">
          <div className="lg:col-span-5">
            <h2 className="font-headline font-extrabold text-4xl tracking-tighter mb-6">新しい価値を共に創り出しましょう。</h2>
            <p className="text-on-surface-variant mb-12">共同研究、プロジェクトのご相談、学術的な議論をお待ちしております。</p>
            <div className="space-y-8">
              <a className="flex items-center gap-4 group" href="mailto:hello@academiccurator.com">
                <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <span className="font-medium border-b border-transparent group-hover:border-primary transition-all">hello@academiccurator.com</span>
              </a>
              <a className="flex items-center gap-4 group" href="#">
                <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">person_search</span>
                </div>
                <span className="font-medium border-b border-transparent group-hover:border-primary transition-all">LinkedIn / @theacademiccurator</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form className="bg-surface-container-lowest p-10 rounded-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-label uppercase tracking-widest text-outline">お名前</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary/20 focus:bg-surface-bright transition-all" placeholder="氏名を入力" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label uppercase tracking-widest text-outline">メールアドレス</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary/20 focus:bg-surface-bright transition-all" placeholder="name@domain.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-outline">お問い合わせ種別</label>
                <select className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary/20 focus:bg-surface-bright transition-all">
                  <option>学術的なお問い合わせ</option>
                  <option>共同制作・コラボレーションのご提案</option>
                  <option>その他メッセージ</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-outline">メッセージ</label>
                <textarea className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-1 focus:ring-primary/20 focus:bg-surface-bright transition-all" placeholder="プロジェクトや内容についてお聞かせください..." rows={4}></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold shadow-md hover:bg-primary-container active:scale-95 transition-all" type="submit">
                送信
              </button>
            </form>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-slate-50 border-t border-outline-variant/10 w-full py-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">
          <p className="font-plus-jakarta text-sm uppercase tracking-widest text-slate-500">© 2024 The Academic Curator. Built with Technical Soul.</p>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:underline decoration-blue-500 underline-offset-4 text-sm font-plus-jakarta uppercase tracking-widest transition-opacity opacity-80 hover:opacity-100" href="#">LinkedIn</a>
            <a className="text-slate-500 hover:underline decoration-blue-500 underline-offset-4 text-sm font-plus-jakarta uppercase tracking-widest transition-opacity opacity-80 hover:opacity-100" href="#">GitHub</a>
            <a className="text-slate-500 hover:underline decoration-blue-500 underline-offset-4 text-sm font-plus-jakarta uppercase tracking-widest transition-opacity opacity-80 hover:opacity-100" href="#">Twitter</a>
            <a className="text-slate-500 hover:underline decoration-blue-500 underline-offset-4 text-sm font-plus-jakarta uppercase tracking-widest transition-opacity opacity-80 hover:opacity-100" href="#">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
