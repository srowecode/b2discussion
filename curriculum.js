const curriculum = [
    {
        level: "B2",
        id: 1,
        title: "Lesson 1: Opinion Exchange - The Future of AI in the Workplace",
        questions: [
            { eng: "1. Do you believe artificial intelligence will eventually replace human jobs in your industry?", jpn: "1. 人工知能は最終的にあなたの業界で人間の仕事に取って代わると思いますか？" },
            { eng: "2. How can companies ensure that AI is used ethically in the workplace?", jpn: "2. 企業は職場でAIが倫理的に使用されることをどのように保証できますか？" },
            { eng: "3. What are the biggest risks of relying too heavily on machine learning algorithms?", jpn: "3. 機械学習アルゴリズムに過度に依存することの最大のリスクは何ですか？" },
            { eng: "4. Do you think AI tools make employees more creative or more lazy?", jpn: "4. AIツールは従業員をより創造的にすると思いますか、それとも怠惰にすると思いますか？" },
            { eng: "5. How should educational systems adapt to prepare students for an AI-driven future?", jpn: "5. AI主導の未来に向けて学生を準備するために、教育システムはどのように適応すべきですか？" },
            { eng: "6. Are you comfortable with AI making decisions about hiring or promotions?", jpn: "6. AIが採用や昇進についての決定を下すことに抵抗はありませんか？" },
            { eng: "7. What specific tasks do you currently automate using technology in your daily life?", jpn: "7. 現在、日常生活でテクノロジーを使って自動化している具体的なタスクは何ですか？" },
            { eng: "8. Will the rise of AI create new types of jobs that we cannot yet imagine?", jpn: "8. AIの台頭は、私たちがまだ想像できない新しい種類の仕事を生み出すでしょうか？" },
            { eng: "9. How does the integration of AI affect the emotional intelligence required for leadership?", jpn: "9. AIの統合は、リーダーシップに求められる心の知能指数（EQ）にどのような影響を与えますか？" },
            { eng: "10. Should the government strictly regulate the development of advanced artificial intelligence?", jpn: "10. 政府は高度な人工知能の開発を厳格に規制すべきですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Intensifying Comparatives to a high degree",
                explanation: "Using words like 'much', 'far', 'a lot', 'way', 'considerably', or 'significantly' directly before a comparative adjective adds emphasis to the comparison. It highlights a significant difference between two or more items.",
                explanationJpn: "比較形容詞を修飾し強めるために「much」等を使うことで、比較を強調することができます。2つ以上のアイテムの間の大きな違いを強調します。",
                examples: [
                    { eng: "This new software is much more efficient than the previous version.", jpn: "この新しいソフトウェアは、以前のバージョンよりもはるかに効率的である。" },
                    { eng: "This AI algorithm is much faster at processing data than older models.", jpn: "このAIアルゴリズムは、旧モデルよりもはるかに高速にデータを処理します。" }
                ]
            },
            {
                point: "2. Expressing requirements for a task have been met",
                explanation: "When 'enough' follows an adjective and is paired with a 'to'-infinitive, it indicates that the degree of the quality described by the adjective is sufficient for the action described by the infinitive to take place.",
                explanationJpn: "形容詞の後に'enough'が続き、'to'不定詞と対になる場合、形容詞によって説明される品質の程度が、不定詞によって説明される動作が行われるのに十分であることを示します。",
                examples: [
                    { eng: "The software is stable enough to run on all major operating systems.", jpn: "そのソフトウェアは、すべての主要なオペレーティングシステム上で動作するのに十分安定している。" },
                    { eng: "The team is experienced enough to manage the complex AI project.", jpn: "チームは複雑なAIプロジェクトを管理するのに十分な経験を持っている。" }
                ]
            }
        ],
        expressions: [
            { eng: "First off", jpn: "まず最初に" },
            { eng: "Additionally", jpn: "加えて" },
            { eng: "Building on that", jpn: "それを踏まえて" },
            { eng: "Another crucial aspect is", jpn: "もう一つの重要な側面は" },
            { eng: "All in all", jpn: "全体として" }
        ]
    },
    {
        level: "B2",
        id: 2,
        title: "Lesson 2: Opinion Exchange - The Impact of Remote Work on Society",
        questions: [
            { eng: "1. Has remote work permanently changed the way we define work-life balance?", jpn: "1. リモートワークは、私たちがワークライフバランスを定義する方法を永久に変えましたか？" },
            { eng: "2. What are the psychological impacts of lacking face-to-face interaction with colleagues?", jpn: "2. 同僚との対面での交流が欠如することの心理的影響は何ですか？" },
            { eng: "3. Does working from home increase or decrease overall corporate productivity?", jpn: "3. 在宅勤務は全体的な企業の生産性を向上させますか、それとも低下させますか？" },
            { eng: "4. How can managers effectively evaluate the performance of remote employees?", jpn: "4. マネージャーはリモート従業員のパフォーマンスをどのように効果的に評価できますか？" },
            { eng: "5. Will large corporate office buildings become obsolete in the next twenty years?", jpn: "5. 今後20年で、大規模な企業のオフィスビルは時代遅れになるでしょうか？" },
            { eng: "6. Do remote workers miss out on crucial spontaneous brainstorming opportunities?", jpn: "6. リモートワーカーは、自然発生的なブレインストーミングの重要な機会を逃していますか？" },
            { eng: "7. How does a lack of commuting affect local economies and urban environments?", jpn: "7. 通勤の減少は、地域経済や都市環境にどのような影響を与えますか？" },
            { eng: "8. Is a hybrid model truly the best of both worlds, or does it create more confusion?", jpn: "8. ハイブリッドモデルは本当に両方のいいとこ取りですか、それともさらなる混乱を招きますか？" },
            { eng: "9. How can companies maintain a strong corporate culture with a dispersed workforce?", jpn: "9. 分散した労働力で、企業はどのように強力な企業文化を維持できますか？" },
            { eng: "10. Should companies pay for their employees' home office equipment and internet?", jpn: "10. 企業は従業員のホームオフィス機器やインターネットの費用を負担すべきですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing an overwhelming comparison",
                explanation: "The premodifier 'by far' is used to intensify a superlative adjective, emphasizing that the subject being described stands out significantly from all others in its category.",
                explanationJpn: "前置修飾語「by far」は最上級形容詞を強めるために使われ、説明される対象がそのカテゴリーに属する他のすべてのものよりも著しく際立っていることを強調します。",
                examples: [
                    { eng: "This is by far the most efficient software we’ve ever developed.", jpn: "これは、私たちがこれまで開発した中で最も効率的なソフトウェアです。" },
                    { eng: "Their security system is by far the most reliable we’ve seen.", jpn: "この会社のセキュリティシステムは、我々が見た中で最も信頼できるものだ。" }
                ]
            },
            {
                point: "2. Using Adjective Phrases to Modify Nouns",
                explanation: "Adjective phrases enhance nouns by providing additional details, descriptions, or specifications. They allow speakers and writers to convey more nuanced and vivid images.",
                explanationJpn: "形容詞句は、補足的な詳細、説明、または仕様を提供することで、名詞を強化します。これにより、よりニュアンス豊かで生き生きとしたイメージを伝えることができます。",
                examples: [
                    { eng: "The application, meticulously tested for usability, received high user ratings.", jpn: "使いやすさを入念にテストしたアプリケーションは、ユーザーから高い評価を得た。" },
                    { eng: "Our cloud service, equipped with advanced analytics, provides valuable insights to clients.", jpn: "高度な分析機能を備えた当社のクラウドサービスは、顧客に価値ある洞察を提供する。" }
                ]
            }
        ],
        expressions: [
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "By contrast", jpn: "対照的に" },
            { eng: "As a consequence", jpn: "その結果として" },
            { eng: "Due to the fact that", jpn: "～という理由から" },
            { eng: "To wrap things up", jpn: "最後に整理すると" }
        ]
    },
    {
        level: "B2",
        id: 3,
        title: "Lesson 3: Opinion Exchange - Cybersecurity and Digital Privacy",
        questions: [
            { eng: "1. How concerned are you about the amount of personal data tech companies collect?", jpn: "1. テック企業が収集する個人データの量について、どの程度懸念していますか？" },
            { eng: "2. Should governments have the right to access private encrypted messages for national security?", jpn: "2. 政府は国家安全保障のために個人の暗号化されたメッセージにアクセスする権利を持つべきですか？" },
            { eng: "3. What is the most effective way for individuals to protect themselves from cyberattacks?", jpn: "3. 個人がサイバー攻撃から身を守るための最も効果的な方法は何ですか？" },
            { eng: "4. Do you believe that absolute digital privacy is an illusion in the modern world?", jpn: "4. 現代社会において絶対的なデジタルプライバシーは幻想だと思いますか？" },
            { eng: "5. How should corporations be punished if they fail to secure customer data?", jpn: "5. 企業が顧客データの保護に失敗した場合、どのように処罰されるべきですか？" },
            { eng: "6. Is biometric security (like facial recognition) safer than traditional passwords?", jpn: "6. 生体認証セキュリティ（顔認識など）は、従来のパスワードよりも安全ですか？" },
            { eng: "7. Why do many people still use weak passwords despite knowing the security risks?", jpn: "7. セキュリティリスクを知っているにもかかわらず、なぜ多くの人が依然として弱いパスワードを使用するのですか？" },
            { eng: "8. Should cybersecurity education be a mandatory subject in elementary schools?", jpn: "8. サイバーセキュリティ教育は小学校の必須科目であるべきですか？" },
            { eng: "9. How does the rise of smart home devices impact our daily privacy?", jpn: "9. スマートホームデバイスの普及は、私たちの日常のプライバシーにどのような影響を与えますか？" },
            { eng: "10. Would you trade your personal data for free access to premium software platforms?", jpn: "10. プレミアムソフトウェアプラットフォームへの無料アクセスのために、自分の個人データを提供しますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Emphasizing Two Negative Actions",
                explanation: "The 'neither…nor' structure is used to emphasize the negation of two actions or states. This construction combines two main clauses of the same type, stressing that both actions or conditions are not true.",
                explanationJpn: "「neither...nor」構造は、2つの動作や状態を否定することを強調するために使用されます。この構文は、同じ種類の2つの主節を結合し、どちらの行動や状態も真実ではないことを強調します。",
                examples: [
                    { eng: "The company neither adopted AI nor invested in automation this year.", jpn: "会社は今年、AIを採用せず、自動化にも投資しませんでした。" },
                    { eng: "The developer neither updated the software nor fixed the bugs.", jpn: "開発者はソフトウェアを更新せず、バグも修正しませんでした。" }
                ]
            },
            {
                point: "2. Expressing Unreal Comparisons",
                explanation: "The expressions 'as if' and 'as though' are used to introduce comparisons that often describe situations that are not real but are imagined or hypothetical.",
                explanationJpn: "「as if」や「as though」という表現は、現実ではないが想像された、または仮定された状況を比較するために使用されます。",
                examples: [
                    { eng: "The developer worked as if he was racing against time.", jpn: "開発者は時間と競争しているかのように働いていました。" },
                    { eng: "The engineer solved the problem as if it were the most urgent issue in the company.", jpn: "エンジニアはそれが会社で最も緊急の問題であるかのように問題を解決しました。" }
                ]
            }
        ],
        expressions: [
            { eng: "In the event that", jpn: "万一～の場合には" },
            { eng: "Nevertheless", jpn: "それにもかかわらず" },
            { eng: "As a matter of fact", jpn: "実際のところ" },
            { eng: "Considering", jpn: "～であることを考慮すると" },
            { eng: "At the end of the day", jpn: "結局のところ" }
        ]
    },{
        level: "B2",
        id: 4,
        title: "Lesson 4: Opinion Exchange - The Ethics of E-commerce and Fast Fashion",
        questions: [
            { eng: "1. How has the rise of e-commerce changed the traditional retail landscape in your country?", jpn: "1. Eコマースの台頭は、あなたの国の伝統的な小売業界をどのように変えましたか？" },
            { eng: "2. Do you think fast fashion brands should be held responsible for their environmental impact?", jpn: "2. ファストファッションブランドは、その環境への影響に対して責任を負うべきだと思いますか？" },
            { eng: "3. What are the ethical concerns surrounding next-day delivery services and warehouse working conditions?", jpn: "3. 翌日配送サービスや倉庫の労働環境を巡る倫理的な懸念は何ですか？" },
            { eng: "4. Are consumers becoming more conscious of sustainable shopping, or is convenience still the priority?", jpn: "4. 消費者は持続可能な買い物についてより意識的になっていますか、それとも依然として利便性が優先されていますか？" },
            { eng: "5. How does the constant exposure to targeted online advertisements affect our spending habits?", jpn: "5. ターゲットを絞ったオンライン広告に常にさらされることは、私たちの消費習慣にどのような影響を与えますか？" },
            { eng: "6. Should governments impose higher taxes on companies that produce large amounts of packaging waste?", jpn: "6. 政府は、大量の包装廃棄物を出す企業に対してより高い税金を課すべきですか？" },
            { eng: "7. Why do many people prefer buying physical goods in a store rather than online?", jpn: "7. なぜ多くの人がオンラインではなく実店舗で物理的な商品を買うことを好むのでしょうか？" },
            { eng: "8. Is it possible for a global retail brand to be both highly profitable and 100% sustainable?", jpn: "8. グローバルな小売ブランドが、高い収益性を持ちながら100%持続可能であることは可能ですか？" },
            { eng: "9. How does returning items bought online contribute to global carbon emissions?", jpn: "9. オンラインで購入した商品を返品することは、世界的な炭素排出量にどのように寄与していますか？" },
            { eng: "10. Would you be willing to pay 20% more for items if you knew they were ethically sourced?", jpn: "10. 倫理的に調達されたと分かっている場合、商品に20%多く支払う意思はありますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Sudden Change",
                explanation: "Phrases like 'suddenly,' 'immediately,' and 'instantly' are used to describe events or actions that happen without warning or with very little time in between. These expressions emphasize the quickness or abruptness of the change.",
                explanationJpn: "「suddenly（突然）」「immediately（すぐに）」「instantly（瞬時に）」などのフレーズは、警告なしに、または短い時間の間に発生する出来事や行動を表すために使われます。これらの表現は、変化の迅速さや突発性を強調します。",
                examples: [
                    { eng: "The server suddenly went offline, causing disruptions across the network.", jpn: "サーバーが突然オフラインになり、ネットワーク全体で混乱を引き起こしました。" },
                    { eng: "The issue was resolved immediately by the IT team.", jpn: "その問題はITチームによってすぐに解決されました。" }
                ]
            },
            {
                point: "2. Expressing Time Before a Specific Event",
                explanation: "Phrases like 'in advance,' 'ahead of time,' and 'beforehand' are used to express actions or preparations that occur before a specific event, emphasizing the idea of getting ready.",
                explanationJpn: "「in advance（前もって）」「ahead of time（時間前に）」「beforehand（事前に）」などのフレーズは、特定のイベントの前に行われる準備や行動を表すために使われ、準備を整えることを強調します。",
                examples: [
                    { eng: "The software was tested in advance to ensure no issues during the launch.", jpn: "ソフトウェアは、リリース時に問題が起こらないように前もってテストされました。" },
                    { eng: "The team finished the code review beforehand to avoid delays.", jpn: "チームは遅延を避けるために事前にコードレビューを終えました。" }
                ]
            }
        ],
        expressions: [
            { eng: "From a different perspective", jpn: "異なる視点から見れば" },
            { eng: "In contrast to this", jpn: "これとは対照的に" },
            { eng: "On the flip side", jpn: "裏を返せば" },
            { eng: "Broadly speaking", jpn: "大まかに言えば" },
            { eng: "To sum up", jpn: "まとめると" }
        ]
    },
    {
        level: "B2",
        id: 5,
        title: "Lesson 5: Opinion Exchange - The Gig Economy vs. Traditional Employment",
        questions: [
            { eng: "1. What are the primary advantages of working as a freelancer compared to a full-time employee?", jpn: "1. 正社員と比較して、フリーランサーとして働く主な利点は何ですか？" },
            { eng: "2. Does the gig economy exploit workers by denying them basic corporate benefits?", jpn: "2. ギグエコノミーは、基本的な企業福利厚生を与えないことで労働者を搾取していますか？" },
            { eng: "3. How does the lack of job security in freelance work affect long-term life planning?", jpn: "3. フリーランスの仕事における雇用の安定性の欠如は、長期的な人生設計にどのように影響しますか？" },
            { eng: "4. Should ride-sharing and delivery app companies be forced to classify their drivers as employees?", jpn: "4. ライドシェアや配達アプリの企業は、ドライバーを従業員として分類することを強制されるべきですか？" },
            { eng: "5. Why are younger generations increasingly drawn to contract work and side hustles?", jpn: "5. なぜ若い世代は、契約社員や副業にますます惹かれているのでしょうか？" },
            { eng: "6. How can gig workers protect themselves against fluctuating market demands and economic downturns?", jpn: "6. ギグワーカーは、変動する市場の需要や経済の低迷からどのように身を守ることができますか？" },
            { eng: "7. Do traditional companies lose out on top talent by demanding rigid 9-to-5 schedules?", jpn: "7. 伝統的な企業は、厳格な9時から5時のスケジュールを要求することで優秀な人材を失っていますか？" },
            { eng: "8. How does working independently impact a person's sense of teamwork and corporate loyalty?", jpn: "8. 独立して働くことは、個人のチームワークや企業への忠誠心にどのような影響を与えますか？" },
            { eng: "9. Can a gig economy model ever work successfully in highly regulated industries like healthcare or finance?", jpn: "9. 医療や金融など規制の厳しい業界で、ギグエコノミーモデルがうまく機能することはありますか？" },
            { eng: "10. What role should the government play in providing healthcare or pensions for independent contractors?", jpn: "10. 独立請負業者に医療や年金を提供する上で、政府はどのような役割を果たすべきですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Emphasizing Strong Negative Statements",
                explanation: "Using 'never' at the front of a sentence followed by an inverted subject and main verb creates strong emphasis on the negative aspect of an action or event, stressing that it has never happened.",
                explanationJpn: "「Never（決して）」を文の先頭に置き、続けて倒置された主語と動詞を使うことで、強調された否定表現を作ります。ある行動が一度も起こったことがないことを強調するために使われます。",
                examples: [
                    { eng: "Never have I seen such rapid innovation in software development.", jpn: "こんなに急速なソフトウェア開発の革新を見たことはありません。" },
                    { eng: "Never will the IT team allow a security breach to go unnoticed.", jpn: "ITチームがセキュリティ侵害を見過ごすことは決してありません。" }
                ]
            },
            {
                point: "2. Expressing Time Between Events",
                explanation: "Phrases like 'in the meantime,' 'in the interim,' and 'meanwhile' are used to describe the period between two specific events, emphasizing what happens during the gap.",
                explanationJpn: "「in the meantime（その間に）」「meanwhile（その間に）」といったフレーズは、特定の出来事と出来事の間の期間を表すために使用され、ギャップの間に何が起こるかを強調します。",
                examples: [
                    { eng: "In the meantime, the engineers will focus on fixing smaller bugs.", jpn: "その間に、エンジニアは小さなバグ修正に集中します。" },
                    { eng: "Meanwhile, the design team is working on a new user interface.", jpn: "その間に、デザインチームは新しいユーザーインターフェースに取り組んでいます。" }
                ]
            }
        ],
        expressions: [
            { eng: "Weighing up pros and cons", jpn: "メリットとデメリットを天秤にかけると" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "In short", jpn: "手短に言えば" },
            { eng: "For instance", jpn: "例えば" },
            { eng: "Taking all factors into account", jpn: "あらゆる要因を考慮すると" }
        ]
    },
    {
        level: "B2",
        id: 6,
        title: "Lesson 6: Opinion Exchange - The Role of Social Media in Modern Democracy",
        questions: [
            { eng: "1. Does social media do more harm or more good when it comes to political elections?", jpn: "1. 政治選挙に関して、ソーシャルメディアは利益よりも害をもたらしますか？" },
            { eng: "2. How do algorithmic 'echo chambers' influence an individual's worldview?", jpn: "2. アルゴリズムによる「エコーチェンバー」は、個人の世界観にどのような影響を与えますか？" },
            { eng: "3. Should tech companies be legally responsible for the spread of fake news on their platforms?", jpn: "3. テック企業は自社プラットフォーム上でのフェイクニュースの拡散に対して法的責任を負うべきですか？" },
            { eng: "4. Where is the line between regulating misinformation and violating free speech?", jpn: "4. 誤情報の規制と言論の自由の侵害との境界線はどこにありますか？" },
            { eng: "5. Why do inflammatory and controversial posts often receive the highest engagement online?", jpn: "5. なぜ扇動的で論争を呼ぶ投稿が、オンラインで最も高いエンゲージメントを獲得することが多いのでしょうか？" },
            { eng: "6. Can a political figure win a modern election without a strong social media presence?", jpn: "6. 現代の選挙において、政治家はソーシャルメディアでの強い存在感なしに勝つことができますか？" },
            { eng: "7. How has the ability for regular citizens to share video evidence changed modern activism?", jpn: "7. 一般市民がビデオ証拠を共有できる能力は、現代のアクティビズムをどのように変えましたか？" },
            { eng: "8. Do social media bans on controversial public figures set a dangerous precedent?", jpn: "8. 物議を醸す公人に対するソーシャルメディアの禁止措置は、危険な前例を作りますか？" },
            { eng: "9. How should users independently verify the political information they read online?", jpn: "9. ユーザーはオンラインで読む政治情報をどのように自主的に検証すべきですか？" },
            { eng: "10. Will decentralized, open-source social networks eventually replace massive corporate platforms?", jpn: "10. 分散型のオープンソースソーシャルネットワークは、最終的に巨大な企業プラットフォームに取って代わるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing a result will be the same no matter what happens",
                explanation: "'Even if' is used to express a condition that emphasizes that the outcome or action will not change regardless of a certain situation. It suggests that the result will be the same no matter what happens.",
                explanationJpn: "「even if（たとえ～でも）」は、ある状況や条件にかかわらず結果や行動が変わらないことを強調するために使用されます。何が起こっても結果は同じだということを示唆します。",
                examples: [
                    { eng: "Even if the system crashes, we have a backup plan in place.", jpn: "たとえシステムがクラッシュしても、バックアッププランがあります。" },
                    { eng: "The update will be released even if the testing phase isn’t fully complete.", jpn: "テストフェーズが完全に完了していなくても、アップデートはリリースされます。" }
                ]
            },
            {
                point: "2. Expressing Future Obligations",
                explanation: "The structure 'be to' is used in formal contexts to describe future scheduled actions, often imposed or requested by someone else. It indicates that an action is planned or obligatory.",
                explanationJpn: "「be to」は、フォーマルな場面で使われ、他の人から要求されたり予定された未来の行動を示します。計画や義務であることを強調します。",
                examples: [
                    { eng: "I am to present the new software update at the meeting.", jpn: "私は会議で新しいソフトウェアアップデートを発表する予定です。" },
                    { eng: "The team is to complete the testing by next Friday.", jpn: "チームは来週の金曜日までにテストを完了する予定です。" }
                ]
            }
        ],
        expressions: [
            { eng: "Granted", jpn: "確かに～ではあるが" },
            { eng: "That being said", jpn: "そうは言っても" },
            { eng: "In actual fact", jpn: "現実には" },
            { eng: "Speaking of which", jpn: "そう言えば" },
            { eng: "To be precise", jpn: "正確に言えば" }
        ]
    },{
        level: "B2",
        id: 7,
        title: "Lesson 7: Opinion Exchange - The Transition to Renewable Energy and Climate Action",
        questions: [
            { eng: "1. How urgent is the transition from fossil fuels to renewable energy sources in your country?", jpn: "1. あなたの国において、化石燃料から再生可能エネルギー源への移行はどの程度緊急ですか？" },
            { eng: "2. Should governments ban the sale of new gas-powered vehicles by 2035?", jpn: "2. 政府は2035年までに新しいガソリン車の販売を禁止すべきですか？" },
            { eng: "3. Who should bear the primary financial burden of fighting climate change: governments, corporations, or individuals?", jpn: "3. 気候変動と戦うための主要な財政的負担は、政府、企業、個人の誰が負うべきですか？" },
            { eng: "4. Do you think that nuclear energy is a necessary stepping stone toward a carbon-neutral future?", jpn: "4. 原子力エネルギーは、カーボンニュートラルな未来に向けた必要な足がかりだと思いますか？" },
            { eng: "5. How does the rise of fast shipping and global logistics contribute to environmental degradation?", jpn: "5. 迅速な配送とグローバル物流の台頭は、環境悪化にどのように寄与していますか？" },
            { eng: "6. Are carbon offset programs genuinely effective, or just corporate greenwashing?", jpn: "6. カーボンオフセットプログラムは本当に効果的ですか、それとも単なる企業のグリーンウォッシュですか？" },
            { eng: "7. Should high-emission products like meat or flights be heavily taxed to reduce global greenhouse gases?", jpn: "7. 世界の温室効果ガスを削減するために、肉や飛行機のような高排出製品に重税を課すべきですか？" },
            { eng: "8. What are the biggest challenges preventing developing nations from adopting green technologies?", jpn: "8. 発展途上国がグリーンテクノロジーを採用するのを妨げている最大の課題は何ですか？" },
            { eng: "9. How can modern cities be redesigned to become more environmentally sustainable?", jpn: "9. 現代の都市をより環境的に持続可能なものにするために、どのように再設計できますか？" },
            { eng: "10. Do individual actions (like recycling or using public transport) actually make a difference in the grand scheme of things?", jpn: "10. 個人の行動（リサイクルや公共交通機関の利用など）は、全体的な観点から見て実際に違いをもたらしますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Extent",
                explanation: "'Insofar as' is used to express the extent or degree to which something is true. It introduces a condition or limitation, emphasizing how much something applies or affects a situation.",
                explanationJpn: "「insofar as（～の範囲において、～の限り）」は、何かがどの程度まで正しいか、またはどの程度まで影響を及ぼすかを表現するために使用されます。特定の条件や制限を導入します。",
                examples: [
                    { eng: "Insofar as the software is compatible with the new platform, we can proceed with the upgrade.", jpn: "ソフトウェアが新しいプラットフォームと互換性がある限り、アップグレードを進めることができます。" },
                    { eng: "Insofar as the budget allows, we will allocate additional resources.", jpn: "予算が許す限り、追加のリソースを割り当てます。" }
                ]
            },
            {
                point: "2. Speculating about things in the past (things you are unsure of)",
                explanation: "The structure 'could have + past participle' is used to speculate about something that might have happened in the past, but we are uncertain about it. It expresses possibilities based on unclear information.",
                explanationJpn: "「could have + 過去分詞」は、過去に何かが起こったかもしれないことを推測するために使われます。確実ではない情報に基づいて、可能性を示す表現です。",
                examples: [
                    { eng: "The client could have requested changes, but we are not sure yet.", jpn: "クライアントが変更を要求したかもしれませんが、まだ確かではありません。" },
                    { eng: "The server could have crashed due to a power outage, but we need to investigate further.", jpn: "サーバーが停電のためにクラッシュしたかもしれませんが、さらに調査が必要です。" }
                ]
            }
        ],
        expressions: [
            { eng: "In the first instance", jpn: "まず第一の段階として" },
            { eng: "Consequently", jpn: "したがって" },
            { eng: "In view of", jpn: "～を考慮して" },
            { eng: "With the exception of", jpn: "～という例外を除いて" },
            { eng: "To put it another way", jpn: "別の言い方をすると" }
        ]
    },
    {
        level: "B2",
        id: 8,
        title: "Lesson 8: Opinion Exchange - The Evolution of Digital Entertainment",
        questions: [
            { eng: "1. How have streaming services changed the way we consume movies and television compared to a decade ago?", jpn: "1. ストリーミングサービスは、10年前と比較して、映画やテレビの消費方法をどのように変えましたか？" },
            { eng: "2. Do you think traditional movie theaters will eventually disappear completely?", jpn: "2. 伝統的な映画館は最終的に完全に消滅すると思いますか？" },
            { eng: "3. Is the binge-watching culture harmful to our attention spans and mental health?", jpn: "3. ビンジウォッチング（イッキ見）文化は、私たちの注意力やメンタルヘルスに有害ですか？" },
            { eng: "4. How do algorithmic recommendations on platforms like YouTube or Netflix affect our personal tastes?", jpn: "4. YouTubeやNetflixのようなプラットフォームのアルゴリズムによる推奨は、個人の好みにどのような影響を与えますか？" },
            { eng: "5. Are video games becoming a more influential form of storytelling than traditional books or movies?", jpn: "5. ビデオゲームは、伝統的な本や映画よりも影響力のあるストーリーテリングの形態になりつつありますか？" },
            { eng: "6. What is the impact of influencer culture on the younger generation's career aspirations?", jpn: "6. インフルエンサー文化は、若い世代のキャリアの抱負にどのような影響を与えていますか？" },
            { eng: "7. Should there be stricter age regulations for children accessing live-streaming platforms?", jpn: "7. ライブストリーミングプラットフォームにアクセスする子供に対して、より厳格な年齢規制を設けるべきですか？" },
            { eng: "8. How has the music industry been negatively and positively affected by platforms like Spotify?", jpn: "8. 音楽業界はSpotifyのようなプラットフォームによって、どのような悪影響と好影響を受けていますか？" },
            { eng: "9. Do you believe virtual reality (VR) will replace physical tourism or live concerts in the future?", jpn: "9. 将来、バーチャルリアリティ（VR）が物理的な観光やライブコンサートに取って代わると思いますか？" },
            { eng: "10. How does the constant availability of on-demand entertainment affect human patience?", jpn: "10. オンデマンドのエンターテインメントが常に利用可能であることは、人間の忍耐力にどのような影響を与えますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Stating Causes/Reasons (Clausal)",
                explanation: "Conjunctions like 'due to the fact that' introduce a cause using a full subject-verb clause. This provides a formal explanation for why something happens or why a decision is made.",
                explanationJpn: "「due to the fact that（～という理由から）」などは、完全な主語と動詞の節を使用して原因を導入します。何かが起こる理由や決定がなされる理由をフォーマルに説明します。",
                examples: [
                    { eng: "Due to the fact that Japan’s population is aging, technology must bridge the labor gap.", jpn: "日本の人口が高齢化しているという理由から、テクノロジーが労働力ギャップを埋める必要があります。" },
                    { eng: "Owing to the fact that Japanese enterprise contracts require high trust, security compliance is vital.", jpn: "日本の大企業との契約には高い信頼が必要という点によって、セキュリティコンプライアンスが不可欠です。" }
                ]
            },
            {
                point: "2. Comparing Actions or States with Non-finite Clauses",
                explanation: "This structure is used to compare two tasks or actions by using a comparative adjective like 'easier' or 'harder' followed by 'than' and a non-finite clause (e.g., to-infinitive).",
                explanationJpn: "この文法構造は、「easier」や「harder」などの比較級の形容詞と「than」に続く非定形節（to不定詞など）を使用して、2つのタスクやアクションを比較するために使用されます。",
                examples: [
                    { eng: "It’s easier to troubleshoot than to debug a server.", jpn: "サーバーをデバッグするよりもトラブルシューティングする方が簡単です。" },
                    { eng: "It’s more efficient to automate processes than to manage them manually.", jpn: "手動で管理するよりもプロセスを自動化する方が効率的です。" }
                ]
            }
        ],
        expressions: [
            { eng: "By the way", jpn: "ちなみに" },
            { eng: "As a general rule", jpn: "一般規則として" },
            { eng: "In addition to", jpn: "～に加えて" },
            { eng: "Looking at it from another angle", jpn: "別の切り口から見ると" },
            { eng: "At any rate", jpn: "いずれにしても" }
        ]
    },
    {
        level: "B2",
        id: 9,
        title: "Lesson 9: Opinion Exchange - Globalization vs. Local Culture",
        questions: [
            { eng: "1. Does globalization threaten to erase unique local cultures and traditions?", jpn: "1. グローバリゼーションは、独自の地域文化や伝統を消し去る脅威となりますか？" },
            { eng: "2. How has the global spread of multinational fast-food chains impacted local diets in your country?", jpn: "2. 多国籍ファーストフードチェーンの世界的な広がりは、あなたの国の食生活にどのような影響を与えましたか？" },
            { eng: "3. Is it possible for a country to fully participate in the global economy while protecting its domestic industries?", jpn: "3. ある国が国内産業を保護しながらグローバル経済に完全に参加することは可能ですか？" },
            { eng: "4. Do you think the adoption of English as a global business language is an advantage or a disadvantage?", jpn: "4. 英語がグローバルなビジネス言語として採用されていることは、利点だと思いますか、それとも欠点だと思いますか？" },
            { eng: "5. How has international tourism positively and negatively affected historical landmarks?", jpn: "5. 国際的な観光は、歴史的建造物にどのようなプラスとマイナスの影響を与えましたか？" },
            { eng: "6. Should local governments subsidize traditional arts and crafts to prevent them from dying out?", jpn: "6. 地方政府は伝統工芸が途絶えるのを防ぐために補助金を出すべきですか？" },
            { eng: "7. In what ways does global media (like Hollywood or K-pop) influence beauty standards worldwide?", jpn: "7. グローバルメディア（ハリウッドやK-POPなど）は、世界中の美の基準にどのような影響を与えますか？" },
            { eng: "8. Does the ease of international travel make people more empathetic to other cultures?", jpn: "8. 海外旅行が容易になったことで、人々は他文化に対してより共感的になりましたか？" },
            { eng: "9. How can multinational corporations operate responsibly in developing nations?", jpn: "9. 多国籍企業は、発展途上国でどのように責任を持って事業を行うことができますか？" },
            { eng: "10. Do the economic benefits of globalization outweigh the environmental costs of international shipping and travel?", jpn: "10. グローバリゼーションの経済的利益は、国際輸送や旅行の環境コストを上回りますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Exception",
                explanation: "'Except (that)' is used to express an exception or a specific detail that prevents full agreement or inclusion. It is often used to point out a condition or fact that would change the outcome or decision.",
                explanationJpn: "「except (that)（～という点を除いて）」は、完全な同意や包括を妨げる特定の例外や詳細を表すために使われます。結果や決定を変えるような条件や事実を指摘するために使われます。",
                examples: [
                    { eng: "The app is perfect, except that it’s missing a key feature.", jpn: "重要な機能が欠けているという点を除けば、アプリは完璧です。" },
                    { eng: "The system works well, except that it doesn’t integrate with the new platform.", jpn: "新しいプラットフォームと統合しないという点を除けば、システムはうまく機能します。" }
                ]
            },
            {
                point: "2. Emphasizing Multiple Reasons",
                explanation: "The structure 'Not only … but (also)' is used to emphasize two related points, giving focus to both. It stresses that something is true for multiple reasons.",
                explanationJpn: "「Not only … but also」の構造は、2つの関連するポイントを強調するために使用されます。何かが複数の理由で真実であることを強調するために使用されます。",
                examples: [
                    { eng: "The company not only improved its software but also enhanced its customer support.", jpn: "会社はソフトウェアを改善しただけでなく、カスタマーサポートも強化しました。" },
                    { eng: "Not only is the new app faster, but it’s also more secure.", jpn: "新しいアプリは速いだけでなく、より安全でもあります。" }
                ]
            }
        ],
        expressions: [
            { eng: "Moreover", jpn: "それに加えて" },
            { eng: "Conversely", jpn: "逆に" },
            { eng: "On a related note", jpn: "関連する話として" },
            { eng: "In spite of", jpn: "～にもかかわらず" },
            { eng: "Taking everything into account", jpn: "全てを勘案すると" }
        ]
    },{
        level: "B2",
        id: 10,
        title: "Lesson 10: Opinion Exchange - Space Exploration and Commercialization",
        questions: [
            { eng: "1. Should governments continue to fund space exploration when there are pressing issues on Earth?", jpn: "1. 地球上に差し迫った問題があるにもかかわらず、政府は宇宙探査への資金提供を続けるべきですか？" },
            { eng: "2. Do you believe that human colonization of Mars is a realistic and necessary goal?", jpn: "2. 人類による火星の植民地化は、現実的かつ必要な目標だと思いますか？" },
            { eng: "3. How will commercial space tourism change our perspective of the universe in the coming decades?", jpn: "3. 商業宇宙旅行は、今後数十年で私たちの宇宙に対する見方をどのように変えるでしょうか？" },
            { eng: "4. Should private companies like SpaceX have the power to launch thousands of satellites into orbit?", jpn: "4. SpaceXのような民間企業は、何千もの人工衛星を軌道に打ち上げる権限を持つべきですか？" },
            { eng: "5. What are the potential ethical and environmental dangers of mining asteroids for resources?", jpn: "5. 資源のために小惑星を採掘することの、潜在的な倫理的および環境的危険性は何ですか？" },
            { eng: "6. How can the international community effectively manage and clean up space debris?", jpn: "6. 国際社会はどのようにして宇宙ゴミ（スペースデブリ）を効果的に管理し、清掃することができますか？" },
            { eng: "7. Do you think the discovery of extraterrestrial life would unite or divide humanity?", jpn: "7. 地球外生命体の発見は、人類を団結させると思いますか、それとも分断すると思いますか？" },
            { eng: "8. Is it justifiable for billionaires to spend vast portions of their wealth on personal space travel?", jpn: "8. 億万長者が個人の宇宙旅行に莫大な富を費やすことは正当化されますか？" },
            { eng: "9. How might deep space exploration drive technological advancements that benefit daily life?", jpn: "9. 深宇宙探査は、日常生活に恩恵をもたらす技術の進歩をどのように促進するでしょうか？" },
            { eng: "10. Who should have ownership rights over the Moon or other celestial bodies?", jpn: "10. 月やその他の天体の所有権は誰が持つべきですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing General Truths and Tendencies",
                explanation: "The modal verb 'can' is used to express general truths or tendencies that are typically true in certain situations. This form emphasizes that something can happen or can be a certain way under certain conditions.",
                explanationJpn: "「can」は、一般的な事実や傾向を表現するために使われます。特定の状況において通常起こることや、ある条件下で起こりうることを強調します。",
                examples: [
                    { eng: "Too much screen time can lead to eye strain.", jpn: "画面を見続けることが目の疲れを引き起こすことがあります。" },
                    { eng: "Technology can simplify complex tasks when used correctly.", jpn: "技術は、正しく使用されると複雑な作業を簡素化することがあります。" }
                ]
            },
            {
                point: "2. Expressing Preference",
                explanation: "The use of 'rather than' with a non-finite clause allows the speaker to emphasize a preference for one action over another. The non-finite clause (often a verb without tense, like the infinitive or gerund) follows 'rather than,' making the sentence smoother and more concise.",
                explanationJpn: "「rather than」を非限定節と共に使用することで、ある行動を別の行動よりも好むことを強調します。好ましい行動に焦点を当て、あまり好ましくない行動を強調しないようにしています。",
                examples: [
                    { eng: "The company prefers using open-source software rather than paying for expensive licenses.", jpn: "会社は高価なライセンスを支払うよりも、オープンソースのソフトウェアを使用することを好みます。" },
                    { eng: "I would choose developing in Python rather than using older programming languages.", jpn: "私は古いプログラミング言語を使用するよりも、Pythonで開発することを選びます。" }
                ]
            }
        ],
        expressions: [
            { eng: "To begin with", jpn: "まず第一に" },
            { eng: "Along with this", jpn: "これに伴い" },
            { eng: "By and large", jpn: "概して" },
            { eng: "In contrast to this", jpn: "これとは対照的に" },
            { eng: "All things considered", jpn: "総合的に考慮すると" }
        ]
    },
    {
        level: "B2",
        id: 11,
        title: "Lesson 11: Opinion Exchange - The Ethics of Genetic Engineering",
        questions: [
            { eng: "1. How do you feel about the use of CRISPR technology to edit human DNA?", jpn: "1. 人間のDNAを編集するためのCRISPR技術の使用についてどう思いますか？" },
            { eng: "2. Should parents be allowed to choose specific genetic traits, such as intelligence or eye color, for their children?", jpn: "2. 親が子供の知能や目の色など、特定の遺伝的特徴を選択することは許されるべきですか？" },
            { eng: "3. What are the potential societal consequences if genetic enhancements become available only to the wealthy?", jpn: "3. 遺伝子強化が富裕層のみに利用可能になった場合、社会にどのような潜在的結果をもたらすでしょうか？" },
            { eng: "4. Do the benefits of genetically modified organisms (GMOs) in agriculture outweigh the environmental risks?", jpn: "4. 農業における遺伝子組み換え作物（GMO）の利点は、環境リスクを上回りますか？" },
            { eng: "5. Should it be legal for companies to patent specific genes or genetic sequences?", jpn: "5. 企業が特定の遺伝子や遺伝子配列の特許を取得することは合法であるべきですか？" },
            { eng: "6. How can governments regulate genetic engineering without hindering life-saving medical research?", jpn: "6. 政府は、人命を救う医学研究を妨げることなく、どのように遺伝子工学を規制できますか？" },
            { eng: "7. Is cloning extinct or endangered animals a viable solution to biodiversity loss?", jpn: "7. 絶滅した動物や絶滅危惧種のクローン作成は、生物多様性の喪失に対する実行可能な解決策ですか？" },
            { eng: "8. Do you think scientists are 'playing God' when they alter the fundamental building blocks of life?", jpn: "8. 科学者が生命の基本的な構成要素を改変するとき、彼らは「神を気取っている」と思いますか？" },
            { eng: "9. How might genetic testing services like 23andMe compromise individual privacy?", jpn: "9. 23andMeのような遺伝子検査サービスは、個人のプライバシーをどのように脅かす可能性がありますか？" },
            { eng: "10. If genetic engineering could double the average human lifespan, would you support it?", jpn: "10. 遺伝子工学が人間の平均寿命を2倍にすることができるとしたら、あなたはそれを支持しますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Concessions",
                explanation: "The expression 'I must admit' or 'you must admit' is used to express a concession, meaning that the speaker acknowledges a point that might go against their own argument or perspective. It shows a willingness to recognize a counterargument.",
                explanationJpn: "「I must admit」や「you must admit」は、反対の立場や意見を認めるために使われる表現です。話し手が自分の意見や視点に反しているかもしれない点を認める意思があることを示します。",
                examples: [
                    { eng: "I must admit that the food was better than I expected.", jpn: "正直なところ、食べ物は予想以上に美味しかったです。" },
                    { eng: "You must admit that their proposal is very practical.", jpn: "彼らの提案は非常に実用的だということを認めなければなりませんね。" }
                ]
            },
            {
                point: "2. Indicating Cause or Justification",
                explanation: "The phrase 'in light of' is used to introduce a reason, cause, or justification for a change, action, or decision. It emphasizes the consideration of new information, events, or circumstances that influence the outcome or response.",
                explanationJpn: "「in light of」は、変更、行動、または決定の理由、原因、または正当性を示すために使用されます。新しい情報、出来事、または状況を考慮し、それが結果や対応にどのように影響したかを強調します。",
                examples: [
                    { eng: "In light of customer feedback, the product design was modified.", jpn: "顧客のフィードバックに鑑みて、製品のデザインが変更されました。" },
                    { eng: "In light of the company’s financial situation, budget cuts were implemented.", jpn: "会社の財務状況に鑑みて、予算削減が実施されました。" }
                ]
            }
        ],
        expressions: [
            { eng: "In actual fact", jpn: "現実には" },
            { eng: "Admittedly", jpn: "認めざルを得ないが" },
            { eng: "On account of", jpn: "～の理由で" },
            { eng: "From a different perspective", jpn: "異なる視点から見れば" },
            { eng: "In conclusion", jpn: "結論として" }
        ]
    },
    {
        level: "B2",
        id: 12,
        title: "Lesson 12: Opinion Exchange - Mental Health in the Digital Age",
        questions: [
            { eng: "1. In your opinion, is smartphone addiction a genuine psychological crisis for modern society?", jpn: "1. あなたの意見では、スマートフォン中毒は現代社会にとって真の心理的危機ですか？" },
            { eng: "2. How does the constant exposure to curated lives on social media affect teenagers' self-esteem?", jpn: "2. ソーシャルメディア上の作られた生活に常にさらされることは、十代の若者の自尊心にどのような影響を与えますか？" },
            { eng: "3. Do regular 'digital detoxes' actually improve long-term mental well-being?", jpn: "3. 定期的な「デジタルデトックス」は、長期的な精神的健康を実際に向上させますか？" },
            { eng: "4. Is online therapy as effective as traditional, in-person counseling?", jpn: "4. オンラインセラピーは、伝統的な対面カウンセリングと同じくらい効果的ですか？" },
            { eng: "5. To what extent are employers responsible for preventing digital burnout among remote workers?", jpn: "5. リモートワーカーのデジタル疲労（燃え尽き症候群）を防ぐ上で、雇用主はどの程度の責任を負うべきですか？" },
            { eng: "6. How can parents safely regulate their children's screen time without being overly restrictive?", jpn: "6. 親は過度に制限することなく、子供のスクリーンタイムをどのように安全に管理できますか？" },
            { eng: "7. Has the internet normalized discussing mental health, or has it trivialized serious conditions?", jpn: "7. インターネットはメンタルヘルスについて話し合うことを一般化させましたか、それとも深刻な症状を些細なものにしてしまいましたか？" },
            { eng: "8. What are the best strategies to combat the rise of cyberbullying among young people?", jpn: "8. 若者の間でのサイバーブルイング（ネットいじめ）の増加と戦うための最良の戦略は何ですか？" },
            { eng: "9. How does the rapid consumption of short-form video content affect our overall attention span?", jpn: "9. ショートフォームビデオコンテンツの急速な消費は、私たちの全体的な集中力にどのような影響を与えますか？" },
            { eng: "10. Should social media platforms disable 'likes' and 'follower counts' to reduce anxiety among users?", jpn: "10. ユーザーの不安を軽減するために、ソーシャルメディアプラットフォームは「いいね」や「フォロワー数」を無効にすべきですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Immediate Future Actions",
                explanation: "The phrase 'be about to' is used to indicate an action that is imminent or just about to happen. It emphasizes that something is on the verge of occurring.",
                explanationJpn: "「be about to」は、何かが差し迫って起こることを示すために使われます。これからすぐに始まることを強調します。",
                examples: [
                    { eng: "The system is about to reboot after the update.", jpn: "システムはアップデート後に再起動しようとしています。" },
                    { eng: "We are about to release the new software version.", jpn: "新しいソフトウェアバージョンをリリースしようとしています。" }
                ]
            },
            {
                point: "2. Making Negative Suggestions",
                explanation: "The phrase 'let's not' is used to make a negative suggestion, meaning it encourages the avoidance of a specific action. It is a polite, collective way of suggesting an alternative approach without sounding too forceful.",
                explanationJpn: "「let's not」というフレーズは、特定の行動を避けることを提案するために使用されます。強制的な口調ではなく、別のアプローチや行動を提案するための丁寧な表現です。",
                examples: [
                    { eng: "Let's not release the software update until it’s fully tested.", jpn: "ソフトウェアのアップデートを完全にテストするまでリリースしないようにしましょう。" },
                    { eng: "Let's not overcomplicate the user interface design.", jpn: "ユーザーインターフェースのデザインを複雑にしないようにしましょう。" }
                ]
            }
        ],
        expressions: [
            { eng: "To top it off", jpn: "締めくくりとしてさらに" },
            { eng: "As far as I am concerned", jpn: "私の見解としては" },
            { eng: "In spite of", jpn: "～にもかかわらず" },
            { eng: "That reminds me", jpn: "それで思い出しました" },
            { eng: "All in all", jpn: "全体として" }
        ]
    },{
        level: "B2",
        id: 13,
        title: "Lesson 13: Opinion Exchange - Universal Basic Income (UBI)",
        questions: [
            { eng: "1. Do you believe Universal Basic Income (UBI) is a necessary solution to job displacement caused by AI?", jpn: "1. ユニバーサル・ベーシックインカム（UBI）は、AIによる雇用の喪失に対する必要な解決策だと思いますか？" },
            { eng: "2. Would receiving a guaranteed monthly income make people less motivated to work and contribute to society?", jpn: "2. 毎月の保証された収入を受け取ることで、人々が働き、社会に貢献する意欲は低下するでしょうか？" },
            { eng: "3. How could governments realistically fund a UBI program without causing massive inflation?", jpn: "3. 政府は大規模なインフレを引き起こさずに、現実的にUBIプログラムの資金をどのように調達できるでしょうか？" },
            { eng: "4. Does UBI unfairly give financial assistance to wealthy citizens who do not actually need it?", jpn: "4. UBIは、実際にはそれを必要としない富裕層にも財政支援を不公平に与えることになりますか？" },
            { eng: "5. How might a basic income affect the arts, entrepreneurship, and volunteer work?", jpn: "5. ベーシックインカムは、芸術、起業家精神、ボランティア活動にどのような影響を与えるでしょうか？" },
            { eng: "6. Should UBI replace all other forms of government welfare, such as food stamps or unemployment benefits?", jpn: "6. UBIは、フードスタンプや失業手当など、他のすべての政府の福祉制度に取って代わるべきですか？" },
            { eng: "7. Could implementing UBI lead to a significant increase in taxes for the middle class?", jpn: "7. UBIの導入は、中産階級の税金の大幅な増加につながる可能性がありますか？" },
            { eng: "8. How would employers need to change their wages and working conditions if workers had a guaranteed fallback income?", jpn: "8. 労働者が保証された収入のセーフティネットを持っている場合、雇用主は賃金や労働条件をどのように変える必要があるでしょうか？" },
            { eng: "9. Is it a fundamental human right to have one's basic survival needs met by the state?", jpn: "9. 基本的な生存のニーズを国に満たしてもらうことは、基本的な人権ですか？" },
            { eng: "10. What alternatives to UBI exist that could better support citizens in a rapidly changing economy?", jpn: "10. 急速に変化する経済において、市民をより良く支援できるUBIに代わるものは何が存在しますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Present (as compared to the past)",
                explanation: "Expressions like 'nowadays' and 'these days' are used to compare the present to the past, highlighting how things have changed over time. These expressions emphasize current situations or trends that are different from how they were in the past.",
                explanationJpn: "「nowadays（最近）」や「these days（最近）」といった表現は、過去と比較して現在の状況やトレンドを強調するために使用されます。過去とは異なる現在の状態を強調します。",
                examples: [
                    { eng: "Nowadays, most companies in Japan rely heavily on automation.", jpn: "最近では、日本のほとんどの企業が自動化に大きく依存しています。" },
                    { eng: "These days, remote work has become the norm in the tech industry.", jpn: "最近では、テクノロジー業界ではリモートワークが標準になっています。" }
                ]
            },
            {
                point: "2. Expressing Reflection on Past Time",
                explanation: "Expressions like 'in retrospect,' 'in hindsight,' and 'on second thought' are used to reflect on past actions or decisions with new understanding or knowledge. They often imply that, looking back, the speaker would have done things differently.",
                explanationJpn: "「in retrospect（振り返ってみると）」や「in hindsight（後から考えると）」、「on second thought（考え直して）」といった表現は、過去の行動や決定を新たな理解や知識で振り返る際に使用されます。",
                examples: [
                    { eng: "In hindsight, we should have invested more in AI development.", jpn: "後から考えると、AI開発にもっと投資すべきでした。" },
                    { eng: "In retrospect, delaying the software release was a good decision.", jpn: "振り返ってみると、ソフトウェアのリリースを遅らせたのは良い決定でした。" }
                ]
            }
        ],
        expressions: [
            { eng: "Broadly speaking", jpn: "大まかに言えば" },
            { eng: "On the whole", jpn: "全般的に見て" },
            { eng: "In other words", jpn: "言い換えれば" },
            { eng: "Therefore", jpn: "したがって" },
            { eng: "By and large", jpn: "概して" }
        ]
    },
    {
        level: "B2",
        id: 14,
        title: "Lesson 14: Opinion Exchange - Artificial Intelligence in Healthcare",
        questions: [
            { eng: "1. Would you trust an AI doctor to diagnose a serious illness more than a human doctor?", jpn: "1. 重病の診断において、人間の医師よりもAI医師を信頼しますか？" },
            { eng: "2. What happens to the doctor-patient relationship when empathy is replaced by a machine's efficiency?", jpn: "2. 共感が機械の効率性に取って代わられたとき、医師と患者の関係はどうなりますか？" },
            { eng: "3. Who should be held legally responsible if an AI makes a fatal medical error: the doctor, the hospital, or the software developer?", jpn: "3. AIが致命的な医療ミスを犯した場合、医師、病院、ソフトウェア開発者の誰が法的責任を負うべきですか？" },
            { eng: "4. Do the benefits of robotic surgery outweigh the high costs of implementing the technology?", jpn: "4. ロボット支援手術の利点は、技術導入の多額のコストを上回りますか？" },
            { eng: "5. How comfortable are you with healthcare companies storing your genetic and medical data in the cloud?", jpn: "5. ヘルスケア企業があなたの遺伝子データや医療データをクラウドに保存することに、どの程度抵抗がありませんか？" },
            { eng: "6. Can AI tools effectively solve the problem of severe doctor shortages in rural areas?", jpn: "6. AIツールは、地方における深刻な医師不足の問題を効果的に解決できますか？" },
            { eng: "7. Will the use of AI in medicine make healthcare cheaper and more accessible for everyone?", jpn: "7. 医療におけるAIの使用は、すべての人にとって医療をより安価でアクセスしやすくするでしょうか？" },
            { eng: "8. Should patients always be informed if their diagnosis or treatment plan was generated by an AI?", jpn: "8. 診断や治療計画がAIによって生成された場合、患者には常にその旨が知らされるべきですか？" },
            { eng: "9. How might AI be used to predict and prevent future global pandemics?", jpn: "9. 将来の世界的パンデミックを予測し予防するために、AIはどのように利用できるでしょうか？" },
            { eng: "10. Does the integration of AI risk stripping the 'human touch' out of the healing process?", jpn: "10. AIの統合は、治癒プロセスから「人間的な触れ合い（ヒューマンタッチ）」を奪うリスクがありますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Specific Past Time",
                explanation: "Phrases like 'previously,' 'at that time,' 'back then,' and 'at that point' are used to refer to a specific moment or period in the past. These expressions indicate when something occurred and are often used to emphasize a contrast with the present.",
                explanationJpn: "「previously（以前に）」「at that time（その時）」「back then（その頃）」などのフレーズは、過去の特定の時点や期間を指すために使われます。現在との対比を強調するために使用されます。",
                examples: [
                    { eng: "Previously, the company focused mainly on hardware development.", jpn: "以前は、会社は主にハードウェア開発に集中していました。" },
                    { eng: "At that point, our system was unable to handle high traffic.", jpn: "その時点では、私たちのシステムは高いトラフィックに対応できませんでした。" }
                ]
            },
            {
                point: "2. Expressing Starting from Now",
                explanation: "Phrases like 'from now on,' 'henceforth,' 'going forward,' and 'starting now' are used to signal actions or changes that will begin in the present and continue into the future.",
                explanationJpn: "「from now on（今後）」や「henceforth（これから）」、「going forward（これから先）」などのフレーズは、今から未来に向かって始まる行動や変化を表すために使用されます。",
                examples: [
                    { eng: "From now on, we will prioritize AI development over other projects.", jpn: "今後、私たちは他のプロジェクトよりもAI開発を優先します。" },
                    { eng: "Going forward, the team will focus on automation to increase efficiency.", jpn: "これから先、チームは効率を高めるために自動化に注力します。" }
                ]
            }
        ],
        expressions: [
            { eng: "Fundamentally", jpn: "根本的に" },
            { eng: "In spite of the fact that", jpn: "～という事実にもかかわらず" },
            { eng: "To put it simply", jpn: "単純に言えば" },
            { eng: "With that in mind", jpn: "その点をふまえて" },
            { eng: "Overall", jpn: "総合的に見て" }
        ]
    },
    {
        level: "B2",
        id: 15,
        title: "Lesson 15: Opinion Exchange - Tourism and the Problem of Overtourism",
        questions: [
            { eng: "1. Has the rise of budget airlines done more damage to the environment than good for travelers?", jpn: "1. 格安航空会社の台頭は、旅行者への利益よりも環境へのダメージを大きくしましたか？" },
            { eng: "2. How does the proliferation of short-term rentals like Airbnb affect local housing markets?", jpn: "2. Airbnbのような短期レンタルの激増は、地元の住宅市場にどのような影響を与えますか？" },
            { eng: "3. Should popular tourist destinations impose strict daily visitor caps to prevent overcrowding?", jpn: "3. 人気の観光地は、混雑を防ぐために1日の訪問者数に厳格な上限を設けるべきですか？" },
            { eng: "4. What is the impact of 'Instagram tourism' on historical and natural landmarks?", jpn: "4. 「インスタ映え観光」が歴史的建造物や自然のランドマークに与える影響は何ですか？" },
            { eng: "5. How can travelers ensure that the money they spend benefits the local community rather than multinational corporations?", jpn: "5. 旅行者は、自分たちが使うお金が多国籍企業ではなく地域社会に利益をもたらすことをどのように保証できますか？" },
            { eng: "6. Do you believe that tourists should pay a mandatory 'tourist tax' to help maintain city infrastructure?", jpn: "6. 観光客は都市のインフラ維持を支援するために、義務的な「観光税」を支払うべきだと思いますか？" },
            { eng: "7. When does catering to tourists cross the line into eroding authentic local culture?", jpn: "7. 観光客の要望に応えることが、本物の地域文化を損なう一線を越えるのはいつですか？" },
            { eng: "8. Is sustainable or 'eco-tourism' actually effective, or is it just a marketing buzzword?", jpn: "8. 持続可能な観光や「エコツーリズム」は実際に効果的ですか、それとも単なるマーケティングの流行語ですか？" },
            { eng: "9. Should locals have prioritized access to their city's amenities over visiting tourists?", jpn: "9. 地元住民は、訪れる観光客よりも自分たちの都市の施設への優先的なアクセス権を持つべきですか？" },
            { eng: "10. How has the post-pandemic 'revenge travel' trend worsened the symptoms of overtourism?", jpn: "10. パンデミック後の「リベンジ旅行」のトレンドは、オーバーツーリズムの症状をどのように悪化させましたか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Scheduled Actions",
                explanation: "The structure 'be due to' is used to express scheduled or expected actions, particularly when referring to fixed plans or deadlines. It is often used with a specific time period or event to indicate that something is expected to happen at a certain time.",
                explanationJpn: "「be due to」は、予定された行動や期待される出来事を表すために使われます。特定の期間やイベントと一緒に使用され、ある時点で何かが起こる予定であることを示します。",
                examples: [
                    { eng: "Our new product is due to launch in two weeks.", jpn: "新製品は2週間後に発売予定です。" },
                    { eng: "The software update is due to be released next Monday.", jpn: "ソフトウェアのアップデートは来週の月曜日にリリース予定です。" }
                ]
            },
            {
                point: "2. Expressing Repeated Time Intervals",
                explanation: "Phrases like 'frequently,' 'regularly,' 'periodically,' and 'at regular intervals' are used to describe actions that happen repeatedly over time. These expressions can convey a sense of routine or predictability.",
                explanationJpn: "「frequently（頻繁に）」「regularly（定期的に）」「periodically（周期的に）」などのフレーズは、時間をかけて繰り返される行動を説明するために使用されます。日常的なルーチンや予測可能な行動を伝えるのに役立ちます。",
                examples: [
                    { eng: "The system is checked periodically to ensure optimal performance.", jpn: "システムは最適なパフォーマンスを確保するために定期的にチェックされています。" },
                    { eng: "The software is updated regularly to fix bugs and improve functionality.", jpn: "ソフトウェアはバグ修正と機能向上のために定期的に更新されます。" }
                ]
            }
        ],
        expressions: [
            { eng: "Equally important is", jpn: "同様に重要なのは" },
            { eng: "As a consequence", jpn: "その結果として" },
            { eng: "In summary", jpn: "総括すると" },
            { eng: "Evaluating the trade-offs", jpn: "トレードオフ（利害得失）を検討すると" },
            { eng: "To wrap it all up", jpn: "全体を締めくくると" }
        ]
    },{
        level: "B2",
        id: 16,
        title: "Lesson 16: Opinion Exchange - Corporate Social Responsibility (CSR)",
        questions: [
            { eng: "1. Should a company's primary responsibility be maximizing profit for its shareholders, or serving the community?", jpn: "1. 企業の主な責任は株主のために利益を最大化することであるべきですか、それとも地域社会に奉仕することですか？" },
            { eng: "2. Do you think consumers actually care about a brand's ethical practices, or do they just want the lowest price?", jpn: "2. 消費者はブランドの倫理的実践を本当に気にしていると思いますか、それとも単に最安値を求めているだけですか？" },
            { eng: "3. How can we differentiate between genuine corporate social responsibility and performative 'greenwashing'?", jpn: "3. 真の企業の社会的責任と、パフォーマンスとしての「グリーンウォッシュ」をどのように区別できますか？" },
            { eng: "4. Should governments mandate that all large corporations donate a percentage of their profits to charity?", jpn: "4. 政府はすべての大企業に対し、利益の一定割合を慈善団体に寄付するよう義務付けるべきですか？" },
            { eng: "5. What role should multinational corporations play in solving global issues like poverty or lack of education?", jpn: "5. 貧困や教育不足などの地球規模の問題を解決する上で、多国籍企業はどのような役割を果たすべきですか？" },
            { eng: "6. Do companies that treat their employees well ultimately perform better financially in the long run?", jpn: "6. 従業員を大切に扱う企業は、長期的には最終的により良い財務実績を上げますか？" },
            { eng: "7. Is it ethical for companies to exploit cheap labor in developing countries to keep product costs low?", jpn: "7. 製品コストを低く抑えるために、企業が発展途上国の安価な労働力を搾取することは倫理的ですか？" },
            { eng: "8. How does a strong CSR policy affect a company's ability to attract and retain top talent?", jpn: "8. 強固なCSR方針は、優秀な人材を引き付け、維持する企業の能力にどのような影響を与えますか？" },
            { eng: "9. Should consumers actively boycott brands that have poor environmental or labor records?", jpn: "9. 消費者は、環境や労働の記録が悪いブランドを積極的にボイコットすべきですか？" },
            { eng: "10. Can a company still be considered 'ethical' if it produces products that are inherently harmful to health, like tobacco or fast food?", jpn: "10. タバコやファーストフードなど、本質的に健康に害を及ぼす製品を製造している場合でも、その企業を「倫理的」と見なすことはできますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Cancelled Plans",
                explanation: "The past form of 'be due to' is used to talk about plans or scheduled actions that were intended but ultimately didn’t happen. It emphasizes that something was supposed to occur at a specific time but didn’t.",
                explanationJpn: "「be due to」の過去形は、予定されていたが実行されなかった行動や計画を表すために使われます。特定の時点で何かが起こるはずだったが、最終的に実現しなかったことを強調します。",
                examples: [
                    { eng: "I was due to give a presentation yesterday, but it was postponed.", jpn: "昨日プレゼンテーションをする予定でしたが、延期されました。" },
                    { eng: "The system was due to be updated last week, but there was a delay.", jpn: "システムは先週更新される予定でしたが、遅れがありました。" }
                ]
            },
            {
                point: "2. Expressing Recent past",
                explanation: "Phrases like 'recently' and 'lately' are used to describe actions or events that happened in the recent past or are still ongoing. They imply a short time frame, pointing to developments that just occurred.",
                explanationJpn: "「recently（最近）」や「lately（最近）」というフレーズは、近い過去に起こったことや、まだ続いている出来事を説明するために使われます。短い時間の範囲を示し、最近発生した変化を指します。",
                examples: [
                    { eng: "We’ve recently launched a new AI-powered feature.", jpn: "最近、新しいAI機能をリリースしました。" },
                    { eng: "Lately, the team has been focusing on cybersecurity improvements.", jpn: "最近、チームはサイバーセキュリティの改善に取り組んでいます。" }
                ]
            }
        ],
        expressions: [
            { eng: "On a similar note", jpn: "同様に" },
            { eng: "Consequently", jpn: "したがって" },
            { eng: "In the long run", jpn: "長期的に見て" },
            { eng: "To spell it out", jpn: "分かりやすくはっきり言うと" },
            { eng: "All things considered", jpn: "総合的に考慮すると" }
        ]
    },
    {
        level: "B2",
        id: 17,
        title: "Lesson 17: Opinion Exchange - The Future of Education and Online Learning",
        questions: [
            { eng: "1. Has the widespread adoption of online learning permanently decreased the value of a traditional university degree?", jpn: "1. オンライン学習の普及は、伝統的な大学の学位の価値を永久に低下させましたか？" },
            { eng: "2. What are the main social skills that students miss out on when they learn entirely from home?", jpn: "2. 学生が完全に自宅で学ぶ場合、逃してしまう主な社会的スキルは何ですか？" },
            { eng: "3. Should higher education be free for everyone, or does paying tuition ensure a higher quality of education?", jpn: "3. 高等教育はすべての人に無料であるべきですか、それとも授業料を支払うことで質の高い教育が保証されますか？" },
            { eng: "4. How can teachers effectively keep students engaged and motivated through a computer screen?", jpn: "4. 教師はコンピュータの画面越しに、学生をどのように効果的に惹きつけ、やる気を維持させることができますか？" },
            { eng: "5. Do standardized tests still serve a valid purpose in evaluating a student's true potential?", jpn: "5. 標準化されたテスト（全国統一テストなど）は、依然として学生の真の可能性を評価する有効な目的を果たしていますか？" },
            { eng: "6. Will physical classrooms eventually be replaced entirely by virtual reality environments?", jpn: "6. 物理的な教室は最終的に完全にバーチャルリアリティ環境に置き換わるでしょうか？" },
            { eng: "7. How does the concept of 'lifelong learning' change career trajectories in the modern tech economy?", jpn: "7. 「生涯学習」の概念は、現代のテクノロジー経済におけるキャリアの軌道をどのように変えますか？" },
            { eng: "8. Are short-term coding bootcamps and online certifications becoming more practical than four-year degrees?", jpn: "8. 短期のコーディングブートキャンプやオンライン資格は、4年制の学位よりも実用的になりつつありますか？" },
            { eng: "9. How should schools handle the increasing use of generative AI tools like ChatGPT by students for assignments?", jpn: "9. 学校は、学生が課題のためにChatGPTのような生成AIツールをますます使用することにどのように対処すべきですか？" },
            { eng: "10. Does online learning increase educational equality, or does it worsen the digital divide?", jpn: "10. オンライン学習は教育の平等を高めますか、それともデジタル・ディバイド（情報格差）を悪化させますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Obligation and Expectation",
                explanation: "The structure 'be supposed to' is used to express obligations or expectations. It conveys what someone is expected to do, either because of a prior agreement, rule, or social expectation.",
                explanationJpn: "「be supposed to」は、義務や期待を表現するために使われます。事前の約束やルール、社会的な期待に基づいて何をすべきかを伝えます。",
                examples: [
                    { eng: "She is supposed to submit the report by Friday.", jpn: "彼女は金曜日までにレポートを提出することになっています。" },
                    { eng: "We are supposed to have a meeting today, but it got canceled.", jpn: "今日は会議をする予定でしたが、中止になりました。" }
                ]
            },
            {
                point: "2. Expressing Unwanted Obligation",
                explanation: "The expression 'be forced to' is used to describe situations where someone is made to do something, often against their will or due to circumstances beyond their control. It emphasizes a lack of choice.",
                explanationJpn: "「be forced to」は、誰かが何かをせざるを得ない状況を表現するために使われます。望まない行動を強制される場合や、コントロールできない状況を強調します。",
                examples: [
                    { eng: "We are forced to work overtime to meet the deadline.", jpn: "私たちは締め切りを守るために残業せざるを得ません。" },
                    { eng: "The company is forced to lay off workers due to declining sales.", jpn: "会社は売上の減少により従業員を解雇せざるを得ません。" }
                ]
            }
        ],
        expressions: [
            { eng: "To start with", jpn: "まずは" },
            { eng: "In addition", jpn: "さらに" },
            { eng: "Be that as it may", jpn: "それはそうかもしれないが" },
            { eng: "To illustrate", jpn: "例を挙げて説明すると" },
            { eng: "Overall", jpn: "総合的に見て" }
        ]
    },
    {
        level: "B2",
        id: 18,
        title: "Lesson 18: Opinion Exchange - The Automation of Everyday Life",
        questions: [
            { eng: "1. Are you comfortable with the idea of fully autonomous self-driving cars sharing the road with humans?", jpn: "1. 完全自律型の自動運転車が人間と道路を共有するという考えに抵抗はありませんか？" },
            { eng: "2. How has automated customer service (chatbots, phone trees) changed the consumer experience for better or worse?", jpn: "2. 自動化されたカスタマーサービス（チャットボットや音声ガイダンス）は、消費者体験を良くしましたか、それとも悪くしましたか？" },
            { eng: "3. Do smart home devices (like Alexa or Google Home) cross the line from convenience to privacy invasion?", jpn: "3. スマートホームデバイス（AlexaやGoogle Homeなど）は、利便性からプライバシー侵害への一線を越えていますか？" },
            { eng: "4. If automation reduces the need for human labor, how will people find meaning and purpose outside of work?", jpn: "4. 自動化によって人間の労働の必要性が減った場合、人々は仕事以外でどのように意味や目的を見出すのでしょうか？" },
            { eng: "5. Are cashless and cashier-less stores a necessary evolution of retail, or do they discriminate against certain groups?", jpn: "5. キャッシュレスや無人レジの店舗は小売りの必要な進化ですか、それとも特定のグループを差別していますか？" },
            { eng: "6. Should there be limits on how much a company can automate its workforce to protect local jobs?", jpn: "6. 地元の雇用を守るために、企業が労働力を自動化できる範囲に制限を設けるべきですか？" },
            { eng: "7. How does relying on GPS and digital calendars affect our natural cognitive abilities and memory?", jpn: "7. GPSやデジタルカレンダーへの依存は、私たちの本来の認知能力や記憶力にどのような影響を与えますか？" },
            { eng: "8. In a fully automated society, who is to blame when an algorithm makes a harmful mistake?", jpn: "8. 完全に自動化された社会において、アルゴリズムが有害なミスを犯した場合、誰が責められるべきですか？" },
            { eng: "9. Do you think human relationships are suffering because we interact more with screens and machines than people?", jpn: "9. 人よりも画面や機械と交流することが増えたため、人間関係が損なわれていると思いますか？" },
            { eng: "10. What is one daily task you currently do that you hope will be fully automated in the next five years?", jpn: "10. 現在自分で行っている日常のタスクのうち、今後5年で完全に自動化されてほしいと思うものは何ですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing a Lack of Obligation",
                explanation: "The modal verb 'needn't' is used to express that something is not necessary or required. It indicates that there is no obligation to do something, often reassuring the listener that they can skip a particular action.",
                explanationJpn: "「needn't」は、何かが必要でないことを表現するのに使われます。何かをする義務がないことを表し、聞き手に特定の行動を回避できることを安心させることが多いです。",
                examples: [
                    { eng: "You needn't worry about the presentation; I’ll handle it.", jpn: "プレゼンテーションの心配をする必要はありません。私が担当します。" },
                    { eng: "We needn't rush because we have plenty of time.", jpn: "急ぐ必要はありません。十分な時間があります。" }
                ]
            },
            {
                point: "2. Comparing Past and Present Habits",
                explanation: "The structure 'used to' can be used without a following verb when the previous verb is understood, forming an ellipsis. This is often used to compare past habits with present habits in a concise manner.",
                explanationJpn: "「used to」は、以前の動作や習慣を現在と比較する際に、動詞を省略する形で使われます。過去の習慣と現在の状態を簡潔に比較するのに役立ちます。",
                examples: [
                    { eng: "We don’t see each other as often as we used to.", jpn: "私たちは以前ほど頻繁に会っていません。" },
                    { eng: "I don’t cook at home as much as I used to.", jpn: "私は以前ほど家で料理をしなくなりました。" }
                ]
            }
        ],
        expressions: [
            { eng: "Strictly speaking", jpn: "厳密に言えば" },
            { eng: "What’s more", jpn: "さらに驚くべきことに" },
            { eng: "For this reason", jpn: "このような理由から" },
            { eng: "Alternatively", jpn: "あるいは / その代わりに" },
            { eng: "To wrap things up", jpn: "最後に整理すると" }
        ]
    },{
        level: "B2",
        id: 19,
        title: "Lesson 19: Opinion Exchange - Mass Media and News Consumption",
        questions: [
            { eng: "1. Do you think the 24-hour news cycle causes more anxiety than awareness?", jpn: "1. 24時間のニュースサイクルは、認識を深めるよりも不安を引き起こす要因になっていると思いますか？" },
            { eng: "2. Should traditional news outlets be publicly funded to avoid corporate bias?", jpn: "2. 企業の偏向を避けるために、伝統的な報道機関は公的資金で運営されるべきですか？" },
            { eng: "3. How do algorithms on news apps limit the diversity of our political views?", jpn: "3. ニュースアプリのアルゴリズムは、私たちの政治的見解の多様性をどのように制限していますか？" },
            { eng: "4. Is it possible for a journalist to be entirely objective in their reporting?", jpn: "4. ジャーナリストが報道において完全に客観的であることは可能ですか？" },
            { eng: "5. Do you trust independent podcasters more than mainstream television anchors?", jpn: "5. 主流のテレビキャスターよりも、独立したポッドキャスターを信頼しますか？" },
            { eng: "6. How has the definition of 'breaking news' changed over the past twenty years?", jpn: "6. 「ニュース速報」の定義は、過去20年間でどのように変わりましたか？" },
            { eng: "7. Should schools teach media literacy to help students spot misinformation?", jpn: "7. 学生が誤情報を見抜けるよう、学校はメディア・リテラシーを教えるべきですか？" },
            { eng: "8. Does the constant exposure to negative news make society more cynical?", jpn: "8. ネガティブなニュースに常にさらされることで、社会はよりシニカル（冷笑的）になりますか？" },
            { eng: "9. How can individuals break out of their media 'echo chambers'?", jpn: "9. 個人はどのようにしてメディアの「エコーチェンバー」から抜け出すことができますか？" },
            { eng: "10. Would you support a strict ban on clickbait headlines for major news websites?", jpn: "10. 主要なニュースウェブサイトにおけるクリックベイト（煽り）見出しの厳格な禁止を支持しますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Making requests or suggestions more polite and less direct",
                explanation: "The past continuous is used to make requests or suggestions more polite and less direct. This structure often begins with phrases like 'I was wondering' or 'I was hoping,' which soften the tone and make the speaker's intention sound more tentative and respectful.",
                explanationJpn: "過去進行形は、依頼や提案をより丁寧に、また間接的にするために使用されます。「I was wondering」や「I was hoping」のようなフレーズで始まり、話し手の意図を控えめで丁寧に聞こえるようにします。",
                examples: [
                    { eng: "I was hoping I could leave work a bit earlier today.", jpn: "今日は少し早めに退社できないかと思っていました。" },
                    { eng: "I was wondering if we could arrange a meeting for next week.", jpn: "来週に会議を設定できないかと思っていました。" }
                ]
            },
            {
                point: "2. Expressing negative states that started in the past and continued up till now",
                explanation: "The present perfect continuous negative is used to describe actions or situations that started in the past and continue up to the present, indicating that something has not been happening or functioning as expected. It often expresses disappointment or concern.",
                explanationJpn: "現在完了進行形の否定形は、過去に始まり現在まで続いているが、期待どおりには進行していないことや機能していないことを表すために使われます。失望や懸念を表現するのによく使われます。",
                examples: [
                    { eng: "The team has not been meeting its goals this month.", jpn: "チームは今月、目標を達成していません。" },
                    { eng: "The system has not been updating automatically as expected.", jpn: "システムが期待どおりに自動更新されていません。" }
                ]
            }
        ],
        expressions: [
            { eng: "In actual fact", jpn: "現実には" },
            { eng: "To put it another way", jpn: "別の言い方をすると" },
            { eng: "For this reason", jpn: "このような理由から" },
            { eng: "Broadly speaking", jpn: "大まかに言えば" },
            { eng: "In summary", jpn: "総括すると" }
        ]
    },
    {
        level: "B2",
        id: 20,
        title: "Lesson 20: Opinion Exchange - Modern Diets and Health Trends",
        questions: [
            { eng: "1. Should governments impose a 'sugar tax' on unhealthy foods and beverages?", jpn: "1. 政府は不健康な食品や飲料に「砂糖税」を課すべきですか？" },
            { eng: "2. How does the fast-food industry influence the eating habits of younger generations?", jpn: "2. ファーストフード業界は若い世代の食習慣にどのような影響を与えますか？" },
            { eng: "3. Is the trend of plant-based meat alternatives a genuine solution to environmental issues?", jpn: "3. 植物由来の代替肉のトレンドは、環境問題に対する真の解決策ですか？" },
            { eng: "4. Do food delivery apps make us lazier and less likely to cook at home?", jpn: "4. フードデリバリーアプリは私たちを怠惰にし、家で料理する可能性を低くしますか？" },
            { eng: "5. Should junk food advertisements be banned during children's television programming?", jpn: "5. 子供向けのテレビ番組中にジャンクフードの広告を禁止すべきですか？" },
            { eng: "6. How much responsibility do corporations bear for the global obesity epidemic?", jpn: "6. 世界的な肥満の蔓延に対して、企業はどの程度の責任を負っていますか？" },
            { eng: "7. Is eating organic food a necessity for good health, or just a luxury for the wealthy?", jpn: "7. オーガニック食品を食べることは健康のための必需品ですか、それとも単なる富裕層の贅沢ですか？" },
            { eng: "8. Do extreme fad diets do more harm than good to a person's long-term health?", jpn: "8. 極端な流行のダイエットは、個人の長期的な健康にとって利益よりも害をもたらしますか？" },
            { eng: "9. How has social media changed the way we view our bodies and nutrition?", jpn: "9. ソーシャルメディアは、私たちが自分の体や栄養を見る方法をどのように変えましたか？" },
            { eng: "10. Should employers provide mandatory health and nutrition counseling for their staff?", jpn: "10. 雇用主はスタッフに対して義務的な健康・栄養カウンセリングを提供するべきですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Expressing Necessity and Importance",
                explanation: "The structure 'It + linking verb + adjective (+ that clause)' is used to highlight the necessity or importance of an action or situation. It emphasizes the critical nature or the required action that must be taken.",
                explanationJpn: "「It + linking verb + 形容詞 (+ that 節)」は、ある行動や状況の必要性や重要性を強調するために使われます。行うべきことや取るべき行動の重要性を強調する構造です。",
                examples: [
                    { eng: "It is necessary that we review the proposal before sending it to the client.", jpn: "クライアントに送る前に提案書を確認する必要があります。" },
                    { eng: "It is important that the team completes the testing by Friday.", jpn: "チームが金曜日までにテストを完了することが重要です。" }
                ]
            },
            {
                point: "2. Commenting on How an Action is Performed",
                explanation: "This grammar structure uses manner adverbs to describe how an action is performed. These adverbs give additional detail to the verb, indicating the way or style in which an action happens.",
                explanationJpn: "この文法構造は、動作がどのように行われたかを説明するために様子の副詞を使用します。これらの副詞は、動詞に追加の詳細を加え、動作の方法やスタイルを示します。",
                examples: [
                    { eng: "The programmer coded efficiently to meet the deadline.", jpn: "プログラマーは締め切りに間に合うように効率的にコードを書きました。" },
                    { eng: "The IT specialist fixed the issue promptly to minimize downtime.", jpn: "IT専門家はダウンタイムを最小限に抑えるため、素早く問題を修正しました。" }
                ]
            }
        ],
        expressions: [
            { eng: "On the flip side", jpn: "裏を返せば" },
            { eng: "In spite of the fact that", jpn: "～という事実にもかかわらず" },
            { eng: "To be precise", jpn: "正確に言えば" },
            { eng: "By and large", jpn: "概して" },
            { eng: "Taking everything into account", jpn: "全てを勘案すると" }
        ]
    },
    {
        level: "B2",
        id: 21,
        title: "Lesson 21: Opinion Exchange - The Shift Toward Cashless Societies",
        questions: [
            { eng: "1. What are the primary benefits of transitioning to a fully cashless society?", jpn: "1. 完全なキャッシュレス社会への移行の主な利点は何ですか？" },
            { eng: "2. Does abandoning physical cash unfairly marginalize the elderly and low-income individuals?", jpn: "2. 物理的な現金を放棄することは、高齢者や低所得者を不当に疎外しますか？" },
            { eng: "3. Are you concerned that digital payments allow governments and corporations to track all your purchases?", jpn: "3. デジタル決済により、政府や企業がすべての買い物を追跡できるようになることを懸念していますか？" },
            { eng: "4. How does a cashless economy change a person's psychological relationship with spending money?", jpn: "4. キャッシュレス経済は、お金を使うことに対する個人の心理的関係をどのように変えますか？" },
            { eng: "5. Should businesses be legally required to accept physical cash from customers?", jpn: "5. 企業は顧客から物理的な現金を受け取ることを法的に義務付けられるべきですか？" },
            { eng: "6. What happens to a cashless society during a major cyberattack or power grid failure?", jpn: "6. 大規模なサイバー攻撃や送電網の障害が発生した場合、キャッシュレス社会はどうなりますか？" },
            { eng: "7. Is cryptocurrency a viable replacement for traditional government-backed digital money?", jpn: "7. 暗号資産（仮想通貨）は、従来の政府支援のデジタル通貨の実行可能な代替品ですか？" },
            { eng: "8. Do digital payment apps make it too easy for people to fall into credit card debt?", jpn: "8. デジタル決済アプリは、人々がクレジットカードの負債に陥るのを簡単にしてしまいますか？" },
            { eng: "9. How will the disappearance of cash affect small businesses and street vendors?", jpn: "9. 現金の消滅は、中小企業や露天商にどのような影響を与えますか？" },
            { eng: "10. Would you feel safe living in a country where all financial assets exist solely as digital data?", jpn: "10. すべての金融資産がデジタルデータとしてのみ存在する国に住むことに安心感を感じますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Present perfect passive: Reporting Actions or Requests",
                explanation: "The present perfect passive structure describes actions or requests that have been completed and have relevance to the present moment. It is commonly used in reporting, where the emphasis is on the action being done rather than who performed it.",
                explanationJpn: "現在完了形の受動態は、完了した行動や依頼が現在に関連していることを説明するために使用されます。報告でよく使われ、行動を行った人物ではなく、その行動自体に焦点が当てられます。",
                examples: [
                    { eng: "The report has been completed and submitted to the director.", jpn: "報告書は完成し、ディレクターに提出されました。" },
                    { eng: "The software update has been installed on all computers.", jpn: "ソフトウェアのアップデートはすべてのコンピューターにインストールされました。" }
                ]
            },
            {
                point: "2. Reflexive: Indicate Independence or Autonomy",
                explanation: "Using plural reflexive pronouns like 'by ourselves,' 'by yourselves,' and 'by themselves' indicates that a group of people or things is acting alone, independently, or without assistance.",
                explanationJpn: "複数形の再帰代名詞（「by ourselves」「by yourselves」「by themselves」）を使用することで、グループが自ら行動し、他の助けを借りずに独立していることを示します。",
                examples: [
                    { eng: "The students completed the project by themselves.", jpn: "生徒たちは自分たちでプロジェクトを完了しました。" },
                    { eng: "We organized the entire event by ourselves.", jpn: "私たちは自分たちでイベント全体を企画しました。" }
                ]
            }
        ],
        expressions: [
            { eng: "In addition to", jpn: "～に加えて" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "Consequently", jpn: "したがって" },
            { eng: "Looking at it from another angle", jpn: "別の切り口から見ると" },
            { eng: "At the end of the day", jpn: "結局のところ" }
        ]
    },{
        level: "B2",
        id: 22,
        title: "Lesson 22: Opinion Exchange - The Implementation of Smart Cities",
        questions: [
            { eng: "1. Would you feel comfortable living in a city where sensors track your every movement?", jpn: "1. センサーがあなたのあらゆる動きを追跡する都市に住むことに抵抗はありませんか？" },
            { eng: "2. How can smart cities balance technological efficiency with citizen privacy?", jpn: "2. スマートシティは、技術的な効率性と市民のプライバシーのバランスをどのように取ることができますか？" },
            { eng: "3. Do smart cities risk increasing the digital divide between the rich and the poor?", jpn: "3. スマートシティは、富裕層と貧困層の間のデジタル・ディバイド（情報格差）を広げるリスクがありますか？" },
            { eng: "4. What is the most beneficial feature a smart city could offer its residents?", jpn: "4. スマートシティが住民に提供できる最も有益な機能は何ですか？" },
            { eng: "5. Will traditional traffic lights and signs become obsolete with interconnected autonomous vehicles?", jpn: "5. 相互接続された自動運転車によって、従来の信号機や標識は時代遅れになるでしょうか？" },
            { eng: "6. Should local governments sell city data to private tech companies to fund public projects?", jpn: "6. 地方自治体は公共事業の資金を調達するために、都市のデータを民間のテック企業に販売すべきですか？" },
            { eng: "7. How vulnerable are smart cities to catastrophic cyberattacks or power grid failures?", jpn: "7. スマートシティは、壊滅的なサイバー攻撃や送電網の障害に対してどの程度脆弱ですか？" },
            { eng: "8. Do you think living in a highly optimized, automated environment reduces human spontaneity?", jpn: "8. 高度に最適化され、自動化された環境に住むことは、人間の自発性を低下させると思いますか？" },
            { eng: "9. How can older infrastructure be retrofitted to meet modern smart city standards?", jpn: "9. 古いインフラは、現代のスマートシティの基準を満たすためにどのように改修できますか？" },
            { eng: "10. Would a smart city eliminate crime, or just force it to evolve into digital forms?", jpn: "10. スマートシティは犯罪を根絶するでしょうか、それともデジタルな形態へと進化させるだけでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Past perfect continuous: Describing the Results of Past Actions",
                explanation: "The past perfect continuous is used to describe actions that started and continued for a period before a specific point in the past and whose effects or results were still important at that point. It emphasizes the duration and continuity of the action and how it impacted the situation afterward.",
                explanationJpn: "過去完了進行形は、過去の特定の時点の前に開始し、ある期間続いていた行動や、その後の状況に影響を与えた結果を説明するために使用されます。行動の継続性とその結果を強調します。",
                examples: [
                    { eng: "I had been exercising regularly, so I felt much healthier last year.", jpn: "私は定期的に運動していたので、昨年はとても健康に感じました。" },
                    { eng: "She had been saving money for months, so she was able to afford the trip.", jpn: "彼女は数ヶ月間お金を貯めていたので、その旅行に行くことができました。" }
                ]
            },
            {
                point: "2. Future perfect continuous: Reflecting on Past Duration from a Future Point",
                explanation: "The future perfect continuous tense is used to look back at an action from a point in the future and emphasize the duration of that action up until that future point. It describes actions that will have been happening for a specific period of time.",
                explanationJpn: "未来完了進行形は、未来の時点から過去の行動を振り返り、その行動がその未来の時点までどれくらい続いていたかを強調するために使われます。",
                examples: [
                    { eng: "By next year, we will have been developing this software for over two years.", jpn: "来年までに、私たちはこのソフトウェアを2年以上開発していることになります。" },
                    { eng: "By the end of this week, I will have been managing the project for six months.", jpn: "今週末までに、私は6ヶ月間プロジェクトを管理していることになります。" }
                ]
            }
        ],
        expressions: [
            { eng: "First and foremost", jpn: "何よりも真っ先に" },
            { eng: "Equally important is", jpn: "同様に重要なのは" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "In particular", jpn: "特に" },
            { eng: "To wrap it all up", jpn: "全体を締めくくると" }
        ]
    },
    {
        level: "B2",
        id: 23,
        title: "Lesson 23: Opinion Exchange - The Ethics of Animal Rights and Dietary Choices",
        questions: [
            { eng: "1. Is it ethical to use animals for medical research if it ultimately saves human lives?", jpn: "1. 最終的に人命を救うのであれば、医学研究に動物を使用することは倫理的ですか？" },
            { eng: "2. How will lab-grown meat change the global agricultural industry in the next decade?", jpn: "2. 今後10年間で、培養肉は世界の農業産業をどのように変えるでしょうか？" },
            { eng: "3. Should governments impose higher taxes on factory-farmed meat to encourage plant-based diets?", jpn: "3. 植物由来の食生活を奨励するために、政府は工場畜産された肉により高い税金を課すべきですか？" },
            { eng: "4. Do zoos serve a valid educational and conservation purpose, or are they simply animal prisons?", jpn: "4. 動物園は教育と保護の正当な目的を果たしていますか、それとも単なる動物の刑務所ですか？" },
            { eng: "5. What is the long-term environmental impact of shifting globally to a vegan diet?", jpn: "5. 世界的にヴィーガンの食生活に移行することの長期的な環境への影響は何ですか？" },
            { eng: "6. Should the cosmetic industry be globally banned from testing its products on animals?", jpn: "6. 化粧品業界は、製品の動物実験を世界的に禁止されるべきですか？" },
            { eng: "7. How do cultural traditions complicate the global debate on animal rights?", jpn: "7. 文化的伝統は、動物の権利に関する世界的な議論をどのように複雑にしていますか？" },
            { eng: "8. Is keeping exotic animals as indoor pets a violation of their natural rights?", jpn: "8. エキゾチックアニマルを室内ペットとして飼うことは、彼らの自然の権利の侵害ですか？" },
            { eng: "9. Will future generations look back at our current meat consumption as barbaric?", jpn: "9. 将来の世代は、現在の私たちの肉の消費を野蛮なものとして振り返るでしょうか？" },
            { eng: "10. Do individuals have a strict moral obligation to reduce their consumption of animal products?", jpn: "10. 個人には、動物製品の消費を減らす厳格な道義的義務がありますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Reflexive: Emphasize the Nature of Something",
                explanation: "The fixed expression 'in itself' is used to emphasize or intensify the inherent nature or quality of something, suggesting that the thing being discussed has value, importance, or characteristics independently of other factors.",
                explanationJpn: "「in itself」という固定表現は、何かの本質的な性質や価値を強調するために使用されます。話題にしているものが他の要因に関係なく、そのままで価値や重要性を持っていることを示します。",
                examples: [
                    { eng: "Learning a new language, in itself, can be very rewarding.", jpn: "新しい言語を学ぶこと自体は非常にやりがいがあります。" },
                    { eng: "The project, in itself, is a great opportunity for growth.", jpn: "そのプロジェクト自体は成長のための素晴らしい機会です。" }
                ]
            },
            {
                point: "2. Time: Expressing Future Timing",
                explanation: "Adverbs and phrases like 'in the near future,' 'in the long run,' 'soon,' and 'eventually' are used to express different views or predictions about future events, conveying expectations about when something will happen.",
                explanationJpn: "「in the near future（近い将来）」「in the long run（長期的に見て）」「eventually（最終的に）」などの副詞やフレーズは、将来の出来事に関する予測や期待を表現するために使用されます。",
                examples: [
                    { eng: "In the long run, investing in AI will improve efficiency across the company.", jpn: "長期的には、AIへの投資が会社全体の効率を向上させるでしょう。" },
                    { eng: "Eventually, the company plans to expand into international markets.", jpn: "最終的には、会社は国際市場に進出する計画です。" }
                ]
            }
        ],
        expressions: [
            { eng: "From my perspective", jpn: "私の視点から言えば" },
            { eng: "Granted", jpn: "確かに～ではあるが" },
            { eng: "As a consequence", jpn: "その結果として" },
            { eng: "Due to the fact that", jpn: "～という理由から" },
            { eng: "At the end of the day", jpn: "結局のところ" }
        ]
    },
    {
        level: "B2",
        id: 24,
        title: "Lesson 24: Opinion Exchange - Pop Culture and Celebrity Worship",
        questions: [
            { eng: "1. Why does society place so much value on the political and social opinions of celebrities?", jpn: "1. なぜ社会は、有名人の政治的および社会的意見にそれほど大きな価値を置くのでしょうか？" },
            { eng: "2. Does the intense media scrutiny of public figures violate their basic right to privacy?", jpn: "2. 公人に対するメディアの激しい監視は、彼らの基本的なプライバシー権を侵害していますか？" },
            { eng: "3. How has 'cancel culture' changed the way celebrities behave in the public eye?", jpn: "3. 「キャンセル・カルチャー」は、公の場での有名人の振る舞いをどのように変えましたか？" },
            { eng: "4. Should famous athletes and actors be paid significantly more than teachers and doctors?", jpn: "4. 有名なアスリートや俳優は、教師や医師よりもはるかに多くの報酬を受け取るべきですか？" },
            { eng: "5. In what ways do internet influencers positively and negatively influence youth culture?", jpn: "5. インターネットのインフルエンサーは、若者文化にどのようなプラスとマイナスの影響を与えますか？" },
            { eng: "6. Are parasocial relationships (one-sided relationships with celebrities) harmful to a fan's mental health?", jpn: "6. パラソーシャル関係（有名人との一方的な関係）は、ファンのメンタルヘルスに有害ですか？" },
            { eng: "7. How does the obsession with celebrity lifestyles contribute to a widespread culture of materialism?", jpn: "7. 有名人のライフスタイルへの執着は、広範な物質主義の文化にどのように寄与していますか？" },
            { eng: "8. Should influencers be legally required to disclose when their photos have been digitally altered?", jpn: "8. インフルエンサーは、自分の写真がデジタル処理されている場合、それを開示することを法的に義務付けられるべきですか？" },
            { eng: "9. Do reality television shows accurately reflect real life, or do they promote toxic and unnatural behavior?", jpn: "9. リアリティ番組は現実の生活を正確に反映していますか、それとも有害で不自然な行動を助長していますか？" },
            { eng: "10. How will the rise of AI-generated virtual influencers impact the future of human celebrity?", jpn: "10. AIによって生成されたバーチャルインフルエンサーの台頭は、人間の有名人の未来にどのような影響を与えるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Modal Perfect: Passively expressing possibilities or hypothetical situations about past actions",
                explanation: "The modal perfect passive structure combines modal verbs (like 'could have,' 'might have,' 'should have') with the present perfect form to describe past events in a passive way. This expresses possibilities or obligations about past situations without specifying the agent.",
                explanationJpn: "モーダルパーフェクト受動態は、「could have」「might have」「should have」などの助動詞と現在完了形を組み合わせて、過去の出来事を受動的に説明します。行動を行った人物を特定せずに、可能性や義務を表現します。",
                examples: [
                    { eng: "The car might have been repaired already by the mechanic.", jpn: "車はすでに整備士によって修理されたかもしれません。" },
                    { eng: "The decision should have been made before the deadline.", jpn: "決定は締め切り前に行われるべきでした。" }
                ]
            },
            {
                point: "2. Subordinating: Expressing a result will be the same no matter what happens",
                explanation: "'Even if' is used to express a condition that emphasizes that the outcome or action will not change regardless of a certain situation or condition. It suggests that the result will be the same no matter what happens.",
                explanationJpn: "「even if（たとえ～でも）」は、ある状況や条件にかかわらず結果や行動が変わらないことを強調するために使用されます。何が起こっても結果は同じだということを示唆します。",
                examples: [
                    { eng: "Even if the system crashes, we have a backup plan in place.", jpn: "たとえシステムがクラッシュしても、バックアッププランがあります。" },
                    { eng: "The update will be released even if the testing phase isn’t fully complete.", jpn: "テストフェーズが完全に完了していなくても、アップデートはリリースされます。" }
                ]
            }
        ],
        expressions: [
            { eng: "As a general rule", jpn: "一般規則として" },
            { eng: "On the flip side", jpn: "裏を返せば" },
            { eng: "In spite of", jpn: "～にもかかわらず" },
            { eng: "By and large", jpn: "概して" },
            { eng: "To sum up", jpn: "まとめると" }
        ]
    },{
        level: "B2",
        id: 25,
        title: "Lesson 25: Opinion Exchange - The Ethics of Data Collection and Targeted Advertising",
        questions: [
            { eng: "1. How much of your personal data are you willing to share in exchange for free digital services?", jpn: "1. 無料のデジタルサービスと引き換えに、自分の個人データをどの程度共有する意思がありますか？" },
            { eng: "2. Is targeted advertising a helpful feature for consumers or an invasion of privacy?", jpn: "2. ターゲットを絞った広告は消費者にとって便利な機能ですか、それともプライバシーの侵害ですか？" },
            { eng: "3. Should tech companies be forced to obtain explicit consent before selling user data to third parties?", jpn: "3. テック企業は、ユーザーデータを第三者に販売する前に明示的な同意を得ることを義務付けられるべきですか？" },
            { eng: "4. How does the constant tracking of our online behavior affect our freedom of choice?", jpn: "4. 私たちのオンライン行動を常に追跡することは、選択の自由にどのような影響を与えますか？" },
            { eng: "5. Are you concerned about political campaigns using data analytics to manipulate voters?", jpn: "5. 政治キャンペーンがデータ分析を使用して有権者を操作することについて懸念していますか？" },
            { eng: "6. Do personalized algorithms create an isolating 'filter bubble' for internet users?", jpn: "6. パーソナライズされたアルゴリズムは、インターネットユーザーを孤立させる「フィルターバブル」を作り出しますか？" },
            { eng: "7. Should there be stricter global regulations on how companies store and protect consumer data?", jpn: "7. 企業が消費者データをどのように保存・保護するかについて、より厳格な世界的な規制を設けるべきですか？" },
            { eng: "8. What would happen if a massive data breach exposed the private communications of millions of users?", jpn: "8. 大規模なデータ漏洩によって何百万人ものユーザーのプライベートな通信が暴露された場合、どうなるでしょうか？" },
            { eng: "9. Can we trust smart devices (like watches and speakers) that constantly listen to or monitor us?", jpn: "9. 常に私たちの声を聞いたり監視したりしているスマートデバイス（時計やスピーカーなど）を信頼できますか？" },
            { eng: "10. Would you support a subscription model for search engines and social media if it meant zero data tracking?", jpn: "10. データ追跡が一切ないことを意味するのであれば、検索エンジンやソーシャルメディアのサブスクリプションモデルを支持しますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Present continuous: Emphasizing situations that are unexpected or undesirable",
                explanation: "The present continuous with adverbs of indefinite frequency is used to describe ongoing, repetitive actions or events, often emphasizing situations that are unexpected, surprising, or undesirable. It helps highlight the continuous nature and persistence of the situation.",
                explanationJpn: "現在進行形と不定の頻度を表す副詞を組み合わせて、予想外や驚き、好ましくない状況について繰り返し発生する行動や出来事を説明するために使用されます。状況が続いていることを強調します。",
                examples: [
                    { eng: "She is perpetually missing deadlines despite several reminders.", jpn: "彼女は何度もリマインダーを受けても、締め切りを常に逃しています。" },
                    { eng: "The machine is frequently breaking down, disrupting the workflow.", jpn: "その機械は頻繁に故障し、作業の流れを妨げています。" }
                ]
            },
            {
                point: "2. Subordinating: Expressing reason",
                explanation: "'For the reason that' is a formal phrase used to introduce the cause or rationale behind an action or decision. It emphasizes the specific reason something happened or was done.",
                explanationJpn: "「for the reason that（～という理由で）」は、行動や決定の背後にある理由や根拠を導入するためのフォーマルな表現です。何かが起こったり行われたりした特定の理由を強調します。",
                examples: [
                    { eng: "The project was delayed for the reason that the client requested additional features.", jpn: "クライアントが追加機能を要求したという理由で、プロジェクトは遅れました。" },
                    { eng: "We postponed the release for the reason that the software still had bugs.", jpn: "ソフトウェアにまだバグがあったという理由で、リリースを延期しました。" }
                ]
            }
        ],
        expressions: [
            { eng: "By the way", jpn: "ちなみに" },
            { eng: "For the purpose of", jpn: "～という目的のために" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "Consequently", jpn: "したがって" },
            { eng: "To put it simply", jpn: "単純に言えば" }
        ]
    },
    {
        level: "B2",
        id: 26,
        title: "Lesson 26: Opinion Exchange - The Pros and Cons of Universal Healthcare Systems",
        questions: [
            { eng: "1. Do you believe that access to high-quality healthcare is a fundamental human right?", jpn: "1. 質の高い医療へのアクセスは基本的人権であると信じていますか？" },
            { eng: "2. How does a universal healthcare system impact the overall economic productivity of a nation?", jpn: "2. 国民皆保険制度は、国の全体的な経済生産性にどのような影響を与えますか？" },
            { eng: "3. Is it fair for wealthy citizens to pay higher taxes to fund medical care for everyone else?", jpn: "3. 富裕層の市民が他の全員の医療費を賄うためにより高い税金を支払うことは公平ですか？" },
            { eng: "4. Do private, for-profit healthcare systems provide better medical innovation than government-run systems?", jpn: "4. 民間の営利目的の医療システムは、政府運営のシステムよりも優れた医療イノベーションを提供しますか？" },
            { eng: "5. How can countries with universal healthcare solve the problem of long waiting times for non-emergency surgeries?", jpn: "5. 国民皆保険制度を持つ国は、緊急でない手術の長い待ち時間という問題をどのように解決できますか？" },
            { eng: "6. Should preventive care and gym memberships be subsidized by the government to reduce long-term medical costs?", jpn: "6. 長期的な医療費を削減するために、予防ケアやジムの会費は政府から助成されるべきですか？" },
            { eng: "7. What are the ethical implications of a system where the rich can pay to skip medical waiting lines?", jpn: "7. 富裕層がお金を払って医療の待ち時間を飛ばせるシステムの倫理的な意味合いは何ですか？" },
            { eng: "8. Should universal healthcare cover elective procedures and cosmetic surgeries?", jpn: "8. 国民皆保険制度は、選択的処置（待機手術）や美容整形手術をカバーすべきですか？" },
            { eng: "9. How does an aging population threaten the sustainability of publicly funded healthcare systems?", jpn: "9. 高齢化は、公的資金による医療システムの持続可能性をどのように脅かしますか？" },
            { eng: "10. Would you prefer to pay high taxes for free healthcare or low taxes and buy private medical insurance?", jpn: "10. 無料の医療のために高い税金を払うのと、低い税金を払って民間の医療保険を買うのとは、どちらが好きですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Subordinating: Expressing an agreement that both parties accept as part of a deal",
                explanation: "'With the understanding that' is used to express an agreement, assumption, or condition that both parties accept as part of a deal or plan. It indicates that something will happen based on certain conditions or expectations.",
                explanationJpn: "「with the understanding that（～という条件で、～という前提で）」は、両者が計画や取引の一部として特定の条件や期待を受け入れていることを示します。",
                examples: [
                    { eng: "We approved the software upgrade, with the understanding that it would be thoroughly tested before release.", jpn: "ソフトウェアのアップグレードを承認しましたが、それがリリース前に徹底的にテストされるという前提です。" },
                    { eng: "The project will continue, with the understanding that additional staff will be hired if necessary.", jpn: "必要に応じて追加のスタッフが雇用されるという条件で、プロジェクトは続行します。" }
                ]
            },
            {
                point: "2. Clauses: Expressing Suitability and Appropriateness",
                explanation: "The structure 'It + linking verb + adjective (+ that clause)' is used to express whether something is appropriate or suitable in a given context. It highlights judgments about the appropriateness, fairness, or legitimacy of a situation.",
                explanationJpn: "「It + linking verb + 形容詞 (+ that 節)」は、何かが特定の状況において適切であるかどうかを表現するために使われます。状況や行動が適切であるか、正当であるか、公平であるかに対する判断を強調します。",
                examples: [
                    { eng: "It is reasonable that the project was delayed due to unforeseen circumstances.", jpn: "予期しない状況によりプロジェクトが遅れたのは妥当です。" },
                    { eng: "It is logical that we first test the software before implementing it.", jpn: "ソフトウェアを実装する前にテストするのは論理的です。" }
                ]
            }
        ],
        expressions: [
            { eng: "First and foremost", jpn: "何よりも真っ先に" },
            { eng: "In comparison with", jpn: "比較すると" },
            { eng: "That being said", jpn: "そうは言っても" },
            { eng: "In the event that", jpn: "万一～の場合には" },
            { eng: "In conclusion", jpn: "結論として" }
        ]
    },
    {
        level: "B2",
        id: 27,
        title: "Lesson 27: Opinion Exchange - The Impact of Automation on the Arts and Creative Industries",
        questions: [
            { eng: "1. Can artificial intelligence ever create a piece of art or music with true emotional depth?", jpn: "1. 人工知能が真の感情的な深みを持った芸術や音楽の作品を創り出すことは可能でしょうか？" },
            { eng: "2. Should AI-generated artwork be allowed to compete against human artists in competitions?", jpn: "2. AIが生成したアートワークは、コンテストで人間のアーティストと競うことを許可されるべきですか？" },
            { eng: "3. How does the use of AI in writing and journalism threaten the authenticity of news and literature?", jpn: "3. 執筆やジャーナリズムにおけるAIの使用は、ニュースや文学の信憑性をどのように脅かしますか？" },
            { eng: "4. If a machine generates a hit song, who should own the copyright: the programmer, the user, or the AI?", jpn: "4. 機械がヒット曲を生成した場合、誰が著作権を所有すべきですか：プログラマー、ユーザー、それともAIですか？" },
            { eng: "5. Will human actors and models eventually be replaced by perfectly rendered digital avatars?", jpn: "5. 人間の俳優やモデルは、最終的に完璧にレンダリングされたデジタルアバターに置き換えられるでしょうか？" },
            { eng: "6. How does the automation of graphic design and video editing impact freelance creatives?", jpn: "6. グラフィックデザインとビデオ編集の自動化は、フリーランスのクリエイターにどのような影響を与えますか？" },
            { eng: "7. Is it ethical to train AI models using copyrighted artwork without paying or crediting the original artists?", jpn: "7. 元のアーティストに支払いやクレジットをせずに、著作権で保護されたアートワークを使用してAIモデルをトレーニングすることは倫理的ですか？" },
            { eng: "8. Do you think people will value handcrafted, human-made art more or less in an AI-dominated future?", jpn: "8. AIが支配する未来において、人々は手作りの人間によるアートをより高く評価すると思いますか、それとも低く評価すると思いますか？" },
            { eng: "9. How can schools encourage human creativity when students can simply use AI to complete their creative assignments?", jpn: "9. 学生がクリエイティブな課題を完了するために単にAIを使用できる場合、学校はどのようにして人間の創造性を奨励できますか？" },
            { eng: "10. Would you pay to attend a live concert if the music and vocals were entirely generated by an AI program?", jpn: "10. 音楽とボーカルが完全にAIプログラムによって生成された場合、ライブコンサートに参加するためにお金を払いますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Comparatives: Emphasizing uniqueness",
                explanation: "This structure uses a superlative adjective (like 'the best' or 'the worst') to describe something that stands out as the most or least of its kind, followed by a clause with 'that' to provide additional context. It is used to emphasize something's uniqueness.",
                explanationJpn: "この構造は、「the best」などの最上級の形容詞を使って、ある物が他と比べて際立っていることを説明するために使用されます。「that」で始まる節が後に続き、独自性を強調します。",
                examples: [
                    { eng: "This is the most innovative software that we have ever developed.", jpn: "これは私たちが今まで開発した中で最も革新的なソフトウェアです。" },
                    { eng: "That was the biggest data breach that the company has ever experienced.", jpn: "それは会社がこれまでに経験した中で最大のデータ漏洩でした。" }
                ]
            },
            {
                point: "2. Subordinating: Expressing Exception",
                explanation: "'Except (that)' is used to express an exception or a specific detail that prevents full agreement or inclusion. It points out a condition or fact that would change the outcome or decision.",
                explanationJpn: "「except (that)（～という点を除いて）」は、完全な同意や包括を妨げる特定の例外や詳細を表すために使われます。結果や決定を変えるような条件や事実を指摘します。",
                examples: [
                    { eng: "The app is perfect, except that it’s missing a key feature.", jpn: "重要な機能が欠けているという点を除けば、アプリは完璧です。" },
                    { eng: "I would approve the design, except that the color scheme is not user-friendly.", jpn: "色使いがユーザーフレンドリーでないという点を除けば、デザインを承認します。" }
                ]
            }
        ],
        expressions: [
            { eng: "To begin with", jpn: "はじめに" },
            { eng: "Furthermore", jpn: "その上" },
            { eng: "Conversely", jpn: "逆に" },
            { eng: "Bearing that in mind", jpn: "それを念頭に置くと" },
            { eng: "To wrap things up", jpn: "最後に整理すると" }
        ]
    },{
        level: "B2",
        id: 28,
        title: "Lesson 28: Opinion Exchange - The Impact of Video Games and Gamification",
        questions: [
            { eng: "1. Do you believe that violent video games desensitize players to real-world violence?", jpn: "1. 暴力的なビデオゲームは、現実世界の暴力に対してプレイヤーを無感覚にする（麻痺させる）と思いますか？" },
            { eng: "2. How can the gamification of mundane tasks improve workplace productivity?", jpn: "2. 平凡なタスクのゲーミフィケーション（ゲーム化）は、職場の生産性をどのように向上させることができますか？" },
            { eng: "3. Should professional esports be recognized and funded in the same way as traditional physical sports?", jpn: "3. プロのeスポーツは、伝統的な物理的スポーツと同じように認識され、資金提供されるべきですか？" },
            { eng: "4. What are the psychological dangers of microtransactions and 'loot boxes' in games targeted at children?", jpn: "4. 子供向けゲームにおけるマイクロトランザクション（少額課金）や「ルートボックス（ガチャ）」の心理的危険性は何ですか？" },
            { eng: "5. How does immersive virtual reality gaming affect a person's sense of physical reality?", jpn: "5. 没入型のバーチャルリアリティゲームは、個人の物理的現実感にどのような影響を与えますか？" },
            { eng: "6. Can video games be an effective educational tool in a traditional classroom setting?", jpn: "6. 伝統的な教室環境において、ビデオゲームは効果的な教育ツールになり得ますか？" },
            { eng: "7. Do you think that excessive gaming is a form of addiction that requires medical treatment?", jpn: "7. 過度なゲームプレイは、医学的治療を必要とする依存症の一形態だと思いますか？" },
            { eng: "8. How has the social aspect of multiplayer online games changed the way teenagers make friends?", jpn: "8. マルチプレイヤーオンラインゲームの社会的側面は、10代の若者の友達作りをどのように変えましたか？" },
            { eng: "9. Should game developers be held responsible if a player copies a dangerous action seen in a game?", jpn: "9. プレイヤーがゲームで見た危険な行動を真似した場合、ゲーム開発者は責任を負うべきですか？" },
            { eng: "10. Will gamification eventually be used by governments to control citizen behavior, like a social credit score?", jpn: "10. ゲーミフィケーションは最終的に、ソーシャルクレジットスコアのように、政府が市民の行動を制御するために使用されるようになるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Past perfect: Indicating that the event or action happened before the time of the reporting verb",
                explanation: "The past perfect simple is used to report statements when the reporting verb is in the past simple. This structure indicates that the event or action being reported happened before the time of the reporting verb.",
                explanationJpn: "過去完了形は、報告動詞が過去形のときに陳述を報告するために使用されます。この構造は、報告動詞の時点より前にその出来事や行動が起こったことを示します。",
                examples: [
                    { eng: "She said that she had lost her keys.", jpn: "彼女は鍵をなくしたと言いました。" },
                    { eng: "He mentioned that the meeting had been postponed.", jpn: "彼は会議が延期されたと言いました。" }
                ]
            },
            {
                point: "2. have: Making Strong Suggestions",
                explanation: "The expression 'you (have) got to' is used to make a strong suggestion, emphasizing that the speaker believes something is important or highly recommended. It often conveys enthusiasm or urgency.",
                explanationJpn: "「you (have) got to」は、話し手が何かを強く勧めたいときに使われます。聞き手がそのアドバイスに従うことで利益を得ると強調するニュアンスがあります。",
                examples: [
                    { eng: "You’ve got to try the food at that new restaurant!", jpn: "あの新しいレストランの料理をぜひ試してみてください！" },
                    { eng: "You’ve got to take a break and relax more.", jpn: "もっと休んでリラックスするべきです。" }
                ]
            }
        ],
        expressions: [
            { eng: "To start with", jpn: "まずは" },
            { eng: "Moreover", jpn: "それに加えて" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "In particular", jpn: "特に" },
            { eng: "At the end of the day", jpn: "結局のところ" }
        ]
    },
    {
        level: "B2",
        id: 29,
        title: "Lesson 29: Opinion Exchange - The Ethics of Artificial Intelligence in Law Enforcement",
        questions: [
            { eng: "1. Would you feel safer if your city used AI-powered facial recognition cameras on every street corner?", jpn: "1. あなたの都市がすべての街角にAI搭載の顔認識カメラを使用したら、より安全だと感じますか？" },
            { eng: "2. Can algorithms truly predict criminal behavior without adopting the biases of their programmers?", jpn: "2. アルゴリズムはプログラマーの偏見を取り入れることなく、真に犯罪行動を予測できますか？" },
            { eng: "3. Should autonomous police robots be allowed to use lethal force in life-threatening situations?", jpn: "3. 自律型警察ロボットは、生命を脅かす状況で致死的な力を使用することを許可されるべきですか？" },
            { eng: "4. How does predictive policing affect marginalized communities that are already heavily monitored?", jpn: "4. 予測的取り締まり（プレディクティブ・ポリシング）は、すでに厳しく監視されている疎外されたコミュニティにどのような影響を与えますか？" },
            { eng: "5. Should law enforcement agencies have unrestricted access to citizens' DNA databases to solve cold cases?", jpn: "5. 警察機関は、未解決事件を解決するために市民のDNAデータベースへの無制限のアクセス権を持つべきですか？" },
            { eng: "6. Do the benefits of quickly identifying suspects outweigh the massive loss of public anonymity?", jpn: "6. 容疑者を迅速に特定する利点は、公的な匿名性の甚大な喪失を上回りますか？" },
            { eng: "7. How can courts ensure that AI-generated evidence is accurate and hasn't been tampered with?", jpn: "7. 裁判所は、AIが生成した証拠が正確であり、改ざんされていないことをどのように保証できますか？" },
            { eng: "8. Should AI judges ever be used to determine prison sentences to eliminate human emotional bias?", jpn: "8. 人間の感情的なバイアスを排除するために、AI裁判官が刑期を決定するために使用されるべきですか？" },
            { eng: "9. What legal rights should a person have if they are falsely arrested due to a machine learning error?", jpn: "9. 機械学習のエラーによって誤認逮捕された場合、その人はどのような法的権利を持つべきですか？" },
            { eng: "10. Will the reliance on technology ultimately make human detectives obsolete?", jpn: "10. テクノロジーへの依存は、最終的に人間の探偵（刑事）を時代遅れにするでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Subordinating: Expressing Similarity",
                explanation: "'In the same way that' is used to compare two actions, situations, or ideas, indicating that they happen or are handled similarly. It draws a parallel between two things to show they are alike in some aspect.",
                explanationJpn: "「in the same way that（～と同じように）」は、2つの行動、状況、またはアイデアを比較するために使用され、似たように起こったり、扱われたりすることを示します。",
                examples: [
                    { eng: "In the same way that we improved the user interface last year, we will focus on user experience this year.", jpn: "昨年ユーザーインターフェースを改善したのと同じように、今年はユーザー体験に注力します。" },
                    { eng: "In the same way that the system was tested before, we will run thorough tests again.", jpn: "システムが以前にテストされたのと同じように、再度徹底的なテストを行います。" }
                ]
            },
            {
                point: "2. Reflexive: Emphasize that an action is performed by and for the same people",
                explanation: "Plural reflexive pronouns like 'ourselves,' 'yourselves,' and 'themselves' are used when the subject and the object of the verb are the same group of people. These pronouns emphasize that the action is performed by and for the same people.",
                explanationJpn: "「ourselves」「yourselves」「themselves」のような複数の再帰代名詞は、動詞の主語と目的語が同じグループである場合に使用されます。これらの代名詞は、行動が同じ人々によって行われ、その人々のために行われることを強調します。",
                examples: [
                    { eng: "The team congratulated themselves after winning the match.", jpn: "チームは試合に勝った後、自分たちを称賛しました。" },
                    { eng: "We found ourselves in a tricky situation during the meeting.", jpn: "会議中に私たちは困難な状況に直面しました。" }
                ]
            }
        ],
        expressions: [
            { eng: "To top it off", jpn: "締めくくりとしてさらに" },
            { eng: "Conversely", jpn: "逆に" },
            { eng: "Be that as it may", jpn: "それはそうかもしれないが" },
            { eng: "As a matter of fact", jpn: "実際のところ" },
            { eng: "Overall", jpn: "総合的に見て" }
        ]
    },
    {
        level: "B2",
        id: 30,
        title: "Lesson 30: Opinion Exchange - The Shift Towards a Four-Day Workweek",
        questions: [
            { eng: "1. Do you believe a four-day workweek would significantly increase employee productivity, or just encourage laziness?", jpn: "1. 週休3日制（週4日勤務）は従業員の生産性を大幅に向上させると思いますか、それとも単に怠惰を助長するだけだと思いますか？" },
            { eng: "2. How would a shorter workweek impact customer service industries that require 24/7 availability?", jpn: "2. 短い労働週は、24時間365日の対応を必要とするカスタマーサービス業界にどのような影響を与えますか？" },
            { eng: "3. Should employees receive the same full-time salary if their working hours are reduced by 20%?", jpn: "3. 労働時間が20%削減された場合でも、従業員は同じフルタイムの給与を受け取るべきですか？" },
            { eng: "4. What are the potential psychological benefits of having a three-day weekend every single week?", jpn: "4. 毎週3連休があることの潜在的な心理的利点は何ですか？" },
            { eng: "5. How would a four-day workweek affect the local economy, such as restaurants and tourism?", jpn: "5. 週休3日制は、レストランや観光業などの地域経済にどのような影響を与えますか？" },
            { eng: "6. Do you think companies offering a four-day workweek have a major advantage in recruiting top talent?", jpn: "6. 週休3日制を提供する企業は、優秀な人材を採用する上で大きな利点があると思いますか？" },
            { eng: "7. Would compressing 40 hours of work into four 10-hour days lead to higher burnout rates?", jpn: "7. 40時間の労働を1日10時間、4日間に圧縮することは、燃え尽き症候群の割合を高くすることにつながりますか？" },
            { eng: "8. How can managers ensure that team communication doesn't break down with overlapping days off?", jpn: "8. マネージャーは、休日の重なりによってチームのコミュニケーションが崩壊しないようにするにはどうすればよいですか？" },
            { eng: "9. Is the four-day workweek only feasible for white-collar office jobs, leaving blue-collar workers behind?", jpn: "9. 週休3日制はホワイトカラーのオフィスワーカーにのみ実現可能で、ブルーカラーの労働者は取り残されてしまうのでしょうか？" },
            { eng: "10. If the four-day workweek becomes standard, what will be the next major evolution in global working conditions?", jpn: "10. 週休3日制が標準になった場合、世界の労働環境における次の大きな進化は何になるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Subordinating: Expressing Caution",
                explanation: "'Lest' is a formal conjunction used to express the idea of preventing something undesirable from happening. It introduces an action that is taken to avoid a negative outcome.",
                explanationJpn: "「lest（～しないように）」は、望ましくない事態を防ぐために何かをするというアイデアを表すフォーマルな接続詞です。防ごうとしている否定的な結果を説明します。",
                examples: [
                    { eng: "The team worked overtime, lest they miss the project deadline.", jpn: "プロジェクトの締め切りを逃さないように、チームは残業しました。" },
                    { eng: "The system was double-checked, lest any errors be overlooked.", jpn: "エラーが見逃されないように、システムを再確認しました。" }
                ]
            },
            {
                point: "2. Subject / Object: Introducing a Concept or Situation",
                explanation: "The pronoun 'it' is used as an object after the verb 'make' to introduce a concept or situation that the speaker or writer will elaborate on. This construction emphasizes the impact or result of something.",
                explanationJpn: "「it」という代名詞は、「make」という動詞の後に目的語として使用され、話者や書き手が説明する概念や状況を紹介します。何かが与える影響や結果を強調します。",
                examples: [
                    { eng: "The lack of time makes it difficult to complete the project.", jpn: "時間の不足がプロジェクトを完了するのを困難にしています。" },
                    { eng: "His explanation makes it clear that the project needs more resources.", jpn: "彼の説明は、プロジェクトにもっとリソースが必要であることを明確にします。" }
                ]
            }
        ],
        expressions: [
            { eng: "First off", jpn: "まず第一に" },
            { eng: "Equally important is", jpn: "同様に重要なのは" },
            { eng: "By contrast", jpn: "対照的に" },
            { eng: "In particular", jpn: "特に" },
            { eng: "In conclusion", jpn: "結論として" }
        ]
    },{
        level: "B2",
        id: 31,
        title: "Lesson 31: Opinion Exchange - The Ethics of Autonomous Weapons in Warfare",
        questions: [
            { eng: "1. Should the international community completely ban the development of fully autonomous lethal weapons?", jpn: "1. 国際社会は、完全自律型の致死兵器の開発を全面的に禁止すべきですか？" },
            { eng: "2. Can an artificial intelligence ever be programmed to understand the moral complexities of war?", jpn: "2. 人工知能は、戦争の道徳的な複雑さを理解するようにプログラムされることが可能でしょうか？" },
            { eng: "3. If an autonomous drone makes a mistake and harms civilians, who should be held responsible for the action?", jpn: "3. 自律型ドローンがミスを犯し民間人に危害を加えた場合、誰がその行動の責任を負うべきですか？" },
            { eng: "4. Does replacing human soldiers with machines make governments more likely to declare war?", jpn: "4. 人間の兵士を機械に置き換えることで、政府はより戦争を宣言しやすくなりますか？" },
            { eng: "5. How might the use of AI in military defense actually save lives on the battlefield?", jpn: "5. 軍事防衛におけるAIの使用は、実際に戦場でどのように命を救う可能性がありますか？" },
            { eng: "6. Do you believe a global arms race in artificial intelligence is inevitable at this point?", jpn: "6. 現時点で、人工知能における世界的な軍拡競争は避けられないと思いますか？" },
            { eng: "7. Should human operators always have a 'kill switch' to override autonomous military systems?", jpn: "7. 自律型軍事システムを無効にするための「キルスイッチ」を人間のオペレーターが常に持つべきですか？" },
            { eng: "8. How does the deployment of robotic security forces affect the psychological well-being of local populations?", jpn: "8. ロボットによる治安部隊の配備は、地域住民の心理的健康にどのような影響を与えますか？" },
            { eng: "9. Is it hypocritical to allow AI to drive cars and fly planes but ban it from military applications?", jpn: "9. AIに車を運転させたり飛行機を飛ばさせたりすることを許可しながら、軍事応用を禁止するのは偽善的ですか？" },
            { eng: "10. What role should tech company employees play if their software is used to build military weapons?", jpn: "10. 自分たちのソフトウェアが軍事兵器の製造に使用される場合、テック企業の従業員はどのような役割を果たすべきですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Subordinating: Introducing a hypothetical condition",
                explanation: "'Supposing (that)' is used to introduce a hypothetical condition or a 'what if' scenario, often inviting the listener to imagine a possible situation. It is similar to 'if,' but slightly more informal or speculative.",
                explanationJpn: "「supposing (that)（もし～なら、仮に～した場合）」は、仮定の条件や「もしも」というシナリオを導入するために使われます。「if」に似ていますが、やや非公式で推測的なニュアンスがあります。",
                examples: [
                    { eng: "Supposing the servers go down, how will we handle the downtime?", jpn: "仮にサーバーがダウンした場合、ダウンタイムをどのように処理しますか？" },
                    { eng: "Supposing that the client rejects the proposal, do we have a backup plan?", jpn: "クライアントが提案を拒否した場合、バックアッププランはありますか？" }
                ]
            },
            {
                point: "2. Complex: Expressing Intent or Purpose",
                explanation: "The phrase 'with a view to' is used to express intention or purpose, indicating that an action is taken with the goal or aim of achieving a particular outcome. It emphasizes long-term planning.",
                explanationJpn: "「with a view to」は、意図や目的を表現するために使われ、特定の結果を達成するために行動が行われていることを示します。長期的な計画を強調します。",
                examples: [
                    { eng: "The government introduced new policies with a view to reducing carbon emissions.", jpn: "政府は炭素排出量を減らすことを目的として、新しい政策を導入しました。" },
                    { eng: "He saved money every month with a view to buying a house in the future.", jpn: "彼は将来家を買うことを目的として、毎月お金を貯めました。" }
                ]
            }
        ],
        expressions: [
            { eng: "First off", jpn: "まず最初に" },
            { eng: "In addition", jpn: "さらに" },
            { eng: "In direct opposition to this", jpn: "これと正反対に" },
            { eng: "Considering", jpn: "～であることを考慮すると" },
            { eng: "At the end of the day", jpn: "結局のところ" }
        ]
    },
    {
        level: "B2",
        id: 32,
        title: "Lesson 32: Opinion Exchange - The Influence of Big Tech Monopolies",
        questions: [
            { eng: "1. Do companies like Google, Apple, and Amazon hold too much power over the global economy?", jpn: "1. Google、Apple、Amazonのような企業は、世界経済に対して過剰な権力を握っていると思いますか？" },
            { eng: "2. Should governments forcefully break up massive tech monopolies to encourage fair market competition?", jpn: "2. 公正な市場競争を促すために、政府は巨大なテック独占企業を強制的に解体すべきですか？" },
            { eng: "3. How does the dominance of a few tech giants stifle innovation from smaller startups?", jpn: "3. 少数の巨大テック企業の支配は、小規模なスタートアップからのイノベーションをどのように阻害していますか？" },
            { eng: "4. Do Big Tech companies have the right to censor users or ban political figures from their platforms?", jpn: "4. ビッグテック企業は、自社のプラットフォームでユーザーを検閲したり、政治家を追放したりする権利を持っていますか？" },
            { eng: "5. Is the convenience provided by giant tech ecosystems worth the loss of consumer choice?", jpn: "5. 巨大なテック・エコシステムが提供する利便性は、消費者の選択肢が失われることと引き換えにする価値がありますか？" },
            { eng: "6. How can regulators accurately understand and control technology that evolves faster than the law?", jpn: "6. 規制当局は、法律よりも速く進化するテクノロジーをどのように正確に理解し、コントロールできるのでしょうか？" },
            { eng: "7. Should search engines be treated as public utilities rather than private corporate assets?", jpn: "7. 検索エンジンは、民間の企業資産ではなく公共事業（インフラ）として扱われるべきですか？" },
            { eng: "8. What are the dangers of allowing one company to control a large percentage of the world's cloud computing infrastructure?", jpn: "8. 1つの企業が世界のクラウド・コンピューティング・インフラの大部分を支配することを許す危険性は何ですか？" },
            { eng: "9. How do aggressive corporate acquisitions (buying out competitors) harm the end user?", jpn: "9. 攻撃的な企業買収（競合他社の買収）は、エンドユーザーにどのような害をもたらしますか？" },
            { eng: "10. Would you voluntarily stop using major tech products if you disagreed with the company's ethical practices?", jpn: "10. 企業の倫理的実践に同意できない場合、あなたは自発的に主要なテック製品の使用をやめますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Quantity: Indicating a Lack of Quantity",
                explanation: "'Little' is used with uncountable nouns to indicate a lack or insufficient amount of something, while 'few' is used with countable nouns to show a small or insufficient number.",
                explanationJpn: "「little」は数えられない名詞とともに使用され、不足を示します。一方、「few」は数えられる名詞とともに使用され、少ない数を表します。",
                examples: [
                    { eng: "The project was completed with very little time to spare.", jpn: "プロジェクトは時間に余裕がほとんどないまま完了しました。" },
                    { eng: "There are few developers who specialize in this programming language.", jpn: "このプログラミング言語を専門とする開発者はほとんどいません。" }
                ]
            },
            {
                point: "2. Clauses: Expressing Surprise and Expectation",
                explanation: "The structure 'It + linking verb + adjective (+ that clause)' is used to highlight feelings of surprise, expectation, or reaction to a situation. It helps emphasize how unexpected or anticipated something is.",
                explanationJpn: "「It + linking verb + 形容詞 (+ that 節)」は、驚きや期待、状況に対する反応を強調するために使われます。何かがどれだけ予想外であったか、または予測されていたかを強調します。",
                examples: [
                    { eng: "It is surprising that the system was fixed so quickly.", jpn: "システムがこんなに早く修正されたのは驚きです。" },
                    { eng: "It is expected that the new feature will increase user engagement.", jpn: "新機能がユーザーのエンゲージメントを高めることは予想されます。" }
                ]
            }
        ],
        expressions: [
            { eng: "To begin with", jpn: "はじめに" },
            { eng: "On top of that", jpn: "おまけに / その上" },
            { eng: "Viewed differently", jpn: "見方を変えれば" },
            { eng: "In the long run", jpn: "長期的に見て" },
            { eng: "All in all", jpn: "全体として" }
        ]
    },
    {
        level: "B2",
        id: 33,
        title: "Lesson 33: Opinion Exchange - Biohacking and Human Augmentation",
        questions: [
            { eng: "1. Would you be willing to implant a microchip in your hand to replace your keys and credit cards?", jpn: "1. 鍵やクレジットカードの代わりに、手にマイクロチップを埋め込む意思はありますか？" },
            { eng: "2. How might neural implants (like brain-computer interfaces) change the way we communicate?", jpn: "2. 神経インプラント（ブレイン・コンピュータ・インターフェースなど）は、私たちのコミュニケーション方法をどのように変える可能性がありますか？" },
            { eng: "3. Should perfectly healthy individuals be allowed to amputate limbs to replace them with superior robotic prosthetics?", jpn: "3. 完全に健康な個人が、優れたロボット義肢に置き換えるために手足を切断することは許可されるべきですか？" },
            { eng: "4. What ethical issues arise when rich people can buy biological upgrades to become smarter or stronger?", jpn: "4. 富裕層がより賢く、より強くなるために生物学的アップグレードを購入できる場合、どのような倫理的問題が生じますか？" },
            { eng: "5. Should augmented individuals be allowed to compete against natural athletes in professional sports?", jpn: "5. 拡張された（オーグメンテッド）個人は、プロスポーツで自然なアスリートと競うことを許可されるべきですか？" },
            { eng: "6. How might employers take advantage of workers who have enhanced physical or cognitive abilities?", jpn: "6. 雇用主は、身体的または認知的機能が強化された労働者をどのように利用する可能性がありますか？" },
            { eng: "7. Do you consider human augmentation to be the natural next step in human evolution?", jpn: "7. 人間の拡張（ヒューマンオーグメンテーション）は、人類の進化における自然な次のステップだと考えますか？" },
            { eng: "8. What happens to our definition of 'humanity' when people are heavily integrated with machine parts?", jpn: "8. 人々が機械の部品と深く統合されたとき、私たちの「人間性」の定義はどうなるのでしょうか？" },
            { eng: "9. Should governments mandate cognitive enhancements for jobs that require extreme focus, like surgeons or pilots?", jpn: "9. 政府は、外科医やパイロットなど極度の集中力を要する職業に対して、認知的強化を義務付けるべきですか？" },
            { eng: "10. Could brain-chip technology be hacked, and what would the psychological consequences be?", jpn: "10. 脳のチップ技術はハッキングされる可能性がありますか、またその心理的結果はどうなるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. must: Making Deductions about the Past",
                explanation: "The perfect form of 'must' (i.e., 'must have') is used to make deductions or conclusions about something that happened in the past. It indicates that the speaker is almost certain about the past event, based on evidence or logical reasoning.",
                explanationJpn: "「must have + 過去分詞」は、過去の出来事に関して推測や結論を述べる際に使われます。話し手が証拠や論理に基づいて過去の出来事について確信を持っていることを示します。",
                examples: [
                    { eng: "You must have been tired after working all night.", jpn: "徹夜で働いた後は、疲れていたに違いありません。" },
                    { eng: "She must have been very happy when she got the news.", jpn: "彼女はその知らせを聞いたとき、とても嬉しかったに違いありません。" }
                ]
            },
            {
                point: "2. Past perfect: Emphasizing Unique Past Experiences",
                explanation: "The past perfect simple can be inverted after 'never (before)' to emphasize the uniqueness or unprecedented nature of an event. This structure is often used in formal contexts or storytelling to highlight a special or surprising experience.",
                explanationJpn: "過去完了形は、「never (before)」の後に倒置され、出来事の特異性や前例のないことを強調するために使用されます。フォーマルな文脈や物語で、特別な経験を強調するためによく使われます。",
                examples: [
                    { eng: "Never had I felt so excited about a project.", jpn: "プロジェクトについてこんなに興奮したことはありませんでした。" },
                    { eng: "Never before had we visited such a beautiful place.", jpn: "こんなに美しい場所を訪れたことはこれまでありませんでした。" }
                ]
            }
        ],
        expressions: [
            { eng: "To start with", jpn: "まずは" },
            { eng: "Furthermore", jpn: "その上" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "Broadly speaking", jpn: "大まかに言えば" },
            { eng: "In conclusion", jpn: "結論として" }
        ]
    },{
        level: "B2",
        id: 34,
        title: "Lesson 34: Opinion Exchange - The Impact of Cryptocurrency and Decentralized Finance",
        questions: [
            { eng: "1. Do you believe cryptocurrencies like Bitcoin will eventually replace traditional fiat currencies?", jpn: "1. ビットコインのような暗号資産（仮想通貨）は、最終的に従来の法定通貨に取って代わると思いますか？" },
            { eng: "2. How does the anonymity of digital currencies affect global crime and money laundering?", jpn: "2. デジタル通貨の匿名性は、世界の犯罪やマネーロンダリングにどのような影響を与えますか？" },
            { eng: "3. Should governments regulate decentralized finance (DeFi) to protect inexperienced investors?", jpn: "3. 政府は経験の浅い投資家を保護するために、分散型金融（DeFi）を規制すべきですか？" },
            { eng: "4. What is the environmental cost of cryptocurrency mining, and is it justifiable?", jpn: "4. 暗号資産のマイニング（採掘）による環境コストは何ですか、またそれは正当化されますか？" },
            { eng: "5. Do you think central bank digital currencies (CBDCs) defeat the original purpose of decentralized crypto?", jpn: "5. 中央銀行デジタル通貨（CBDC）は、分散型暗号資産の本来の目的を台無しにすると思いますか？" },
            { eng: "6. How might blockchain technology be used securely in national democratic elections?", jpn: "6. ブロックチェーン技術は、国の民主的な選挙においてどのように安全に利用される可能性がありますか？" },
            { eng: "7. Why is the cryptocurrency market so highly volatile, and does this prevent it from being a stable store of value?", jpn: "7. なぜ暗号資産市場はこれほどまでに変動が激しいのでしょうか、そしてそれは安定した価値の保存手段となることを妨げていますか？" },
            { eng: "8. Is investing in volatile cryptocurrencies closer to traditional investing or gambling?", jpn: "8. 変動の激しい暗号資産への投資は、伝統的な投資に近いですか、それともギャンブルに近いですか？" },
            { eng: "9. How can developing nations benefit from adopting decentralized digital currencies?", jpn: "9. 発展途上国は、分散型のデジタル通貨を採用することでどのような恩恵を受けることができますか？" },
            { eng: "10. Would you feel safe keeping your entire life savings in a decentralized digital wallet rather than a bank?", jpn: "10. 銀行ではなく、分散型のデジタルウォレットに全財産を保管することに安心感を感じますか？" }
        ],
        grammarPoints: [
            {
                point: "1. can't / cannot: Making Guesses, Predictions, and Deductions",
                explanation: "The negative forms of 'can't' and 'cannot' are used to make guesses, predictions, or deductions based on available information. These forms emphasize that something is logically impossible or highly unlikely.",
                explanationJpn: "「can't」や「cannot」の否定形は、利用可能な情報に基づいて推測や予測、または推論を行う際に使われます。何かが論理的に不可能であるか、非常にありそうにないことを強調します。",
                examples: [
                    { eng: "They can't have finished the project already; it was too complex.", jpn: "彼らがもうプロジェクトを終えたはずがありません。複雑すぎました。" },
                    { eng: "It can't be easy managing such a large team.", jpn: "そんな大きなチームを管理するのは簡単なはずがありません。" }
                ]
            },
            {
                point: "2. dare: Challenging someone to do something daring",
                explanation: "The phrase 'if you dare' is used to challenge someone to do something risky, bold, or daring. It is often employed as a taunt or provocation, daring someone to take an action that may require courage or defiance.",
                explanationJpn: "「if you dare」は、誰かに大胆でリスクのある行動を取らせようと挑発する際に使われます。相手がその行動に出る勇気や度胸があるかどうかを試すために用いられます。",
                examples: [
                    { eng: "Confront him in the meeting, if you dare.", jpn: "会議で彼に立ち向かってみろよ、勇気があるなら！" },
                    { eng: "Tell the boss you disagree, if you dare.", jpn: "上司に反対だと言ってみろよ、勇気があれば！" }
                ]
            }
        ],
        expressions: [
            { eng: "First off", jpn: "まず最初に" },
            { eng: "Furthermore", jpn: "その上" },
            { eng: "By contrast", jpn: "対照的に" },
            { eng: "Considering", jpn: "～であることを考慮すると" },
            { eng: "To sum up", jpn: "まとめると" }
        ]
    },
    {
        level: "B2",
        id: 35,
        title: "Lesson 35: Opinion Exchange - The Ethics of True Crime Entertainment",
        questions: [
            { eng: "1. Why do you think true crime documentaries and podcasts have become so immensely popular?", jpn: "1. なぜトゥルー・クライム（実録犯罪）のドキュメンタリーやポッドキャストがこれほどまでに絶大な人気を集めているのだと思いますか？" },
            { eng: "2. Does the true crime genre exploit the trauma of real victims for financial gain and entertainment?", jpn: "2. トゥルー・クライムというジャンルは、金銭的利益や娯楽のために実際の被害者のトラウマを搾取していますか？" },
            { eng: "3. How does turning a serial killer into the main character of a TV series affect public perception of their crimes?", jpn: "3. 連続殺人犯をテレビシリーズの主人公にすることは、彼らの犯罪に対する大衆の認識にどのような影響を与えますか？" },
            { eng: "4. Should content creators be required to get permission from victims' families before producing a show?", jpn: "4. コンテンツ制作者は、番組を制作する前に被害者の家族から許可を得ることを義務付けられるべきですか？" },
            { eng: "5. Can watching true crime actually educate people on how to stay safe, or does it just create paranoia?", jpn: "5. 実録犯罪番組を見ることは、実際に安全を保つ方法について人々を教育できますか、それとも単なるパラノイア（偏執症）を生み出すだけですか？" },
            { eng: "6. How do amateur internet sleuths both help and hinder active police investigations?", jpn: "6. インターネット上の素人探偵たちは、進行中の警察の捜査をどのように助け、また妨げていますか？" },
            { eng: "7. Is it morally acceptable for streaming platforms to profit heavily from tragic, real-life events?", jpn: "7. ストリーミングプラットフォームが悲劇的な現実の出来事から莫大な利益を得ることは、道徳的に許容されますか？" },
            { eng: "8. Do true crime shows unfairly target and dramatize cases involving specific demographics over others?", jpn: "8. 実録犯罪番組は、他の事件よりも特定の層（デモグラフィック）が関与する事件を不当に標的にし、ドラマ化していますか？" },
            { eng: "9. How does the romanticization of criminals in media affect the judicial system and trial outcomes?", jpn: "9. メディアにおける犯罪者のロマンチック化は、司法制度や裁判の結果にどのような影響を与えますか？" },
            { eng: "10. What ethical guidelines would you propose for directors creating content based on recent violent crimes?", jpn: "10. 最近の凶悪犯罪に基づいたコンテンツを制作する監督に対して、どのような倫理的ガイドラインを提案しますか？" }
        ],
        grammarPoints: [
            {
                point: "1. was / were due to: Expressing Cancelled Plans",
                explanation: "The past form of 'be due to' is used to talk about plans or scheduled actions that were intended but ultimately didn’t happen. It emphasizes that something was supposed to occur at a specific time but didn’t.",
                explanationJpn: "「be due to」の過去形は、予定されていたが実行されなかった行動や計画を表すために使われます。特定の時点で何かが起こるはずだったが、最終的に実現しなかったことを強調します。",
                examples: [
                    { eng: "I was due to give a presentation yesterday, but it was postponed.", jpn: "昨日プレゼンテーションをする予定でしたが、延期されました。" },
                    { eng: "We were due to finalize the project, but the client requested changes.", jpn: "プロジェクトを完了する予定でしたが、クライアントが変更を要求しました。" }
                ]
            },
            {
                point: "2. should be ING: Expressing Expectations for Ongoing Actions",
                explanation: "The structure 'should be + -ing' is used to express expectations for ongoing or continuous actions, either in the present or the future. It conveys that the speaker expects a certain action to be happening now.",
                explanationJpn: "「should be + -ing」は、現在または未来において進行中の行動について期待を表現する際に使われます。話し手が特定の行動が今行われている、または行われることを期待していることを示します。",
                examples: [
                    { eng: "We should be making progress on the project by next week.", jpn: "私たちは来週までにはプロジェクトを進めているはずです。" },
                    { eng: "The team should be practicing for the match right now.", jpn: "チームは今、試合に向けて練習しているはずです。" }
                ]
            }
        ],
        expressions: [
            { eng: "To start with", jpn: "まずは" },
            { eng: "In addition", jpn: "さらに" },
            { eng: "Admittedly", jpn: "認めざルを得ないが" },
            { eng: "In view of the fact that", jpn: "～という事実に鑑みて" },
            { eng: "Overall", jpn: "総合的に見て" }
        ]
    },
    {
        level: "B2",
        id: 36,
        title: "Lesson 36: Opinion Exchange - The Role of Whistleblowers in Society",
        questions: [
            { eng: "1. Do you view corporate or government whistleblowers as courageous heroes or disloyal traitors?", jpn: "1. 企業や政府の内部告発者を、勇敢なヒーローと見なしますか、それとも不誠実な裏切り者と見なしますか？" },
            { eng: "2. Should journalists be legally forced to reveal the identities of their anonymous whistleblowers?", jpn: "2. ジャーナリストは、匿名の内部告発者の身元を明かすよう法的に強制されるべきですか？" },
            { eng: "3. What protections should the law guarantee for employees who report illegal activities within their companies?", jpn: "3. 会社内の違法行為を報告した従業員に対し、法律はどのような保護を保証すべきですか？" },
            { eng: "4. Is there a moral difference between leaking classified military secrets and exposing corporate financial fraud?", jpn: "4. 機密の軍事機密を漏洩することと、企業の財務不正を暴露することの間に道徳的な違いはありますか？" },
            { eng: "5. How does a culture of fear in the workplace prevent potential whistleblowers from stepping forward?", jpn: "5. 職場における恐怖の文化は、潜在的な内部告発者が名乗り出るのをどのように妨げますか？" },
            { eng: "6. Should whistleblowers receive monetary rewards or a percentage of the fines collected from guilty corporations?", jpn: "6. 内部告発者は、金銭的報酬や、有罪となった企業から徴収された罰金の一定割合を受け取るべきですか？" },
            { eng: "7. At what point does leaking information cross the line from public interest to endangering national security?", jpn: "7. 情報漏洩が公益から国家安全保障を危険にさらす一線を越えるのはどの時点ですか？" },
            { eng: "8. How do mainstream media outlets choose which whistleblower stories to cover and which to ignore?", jpn: "8. 主流メディアは、どの内部告発記事を取り上げ、どれを無視するかをどのように選択していますか？" },
            { eng: "9. Can a company genuinely foster a completely transparent culture where whistleblowing isn't necessary?", jpn: "9. 企業は、内部告発が必要ないほど完全に透明性のある文化を真に育むことができますか？" },
            { eng: "10. Would you report your own company for severe environmental violations if it meant losing your career?", jpn: "10. キャリアを失うことになったとしても、自社の深刻な環境違反を報告しますか？" }
        ],
        grammarPoints: [
            {
                point: "1. in the meantime: Expressing Time Between Events",
                explanation: "Phrases like 'in the meantime,' 'in the interim,' 'meanwhile,' and 'during that time' are used to describe the period between two specific events. They emphasize what happens during the gap between two points in time.",
                explanationJpn: "「in the meantime（その間に）」や「meanwhile（その間に）」といったフレーズは、特定の出来事と出来事の間の期間を表すために使用されます。2つの出来事の間に何が起こるのかを強調します。",
                examples: [
                    { eng: "In the meantime, the engineers will focus on fixing smaller bugs.", jpn: "その間に、エンジニアは小さなバグ修正に集中します。" },
                    { eng: "Meanwhile, the design team is working on a new user interface.", jpn: "その間に、デザインチームは新しいユーザーインターフェースに取り組んでいます。" }
                ]
            },
            {
                point: "2. supposed to: Expressing Hearsay or Rumors",
                explanation: "The structure 'be supposed to' is used to express hearsay or rumors. This form suggests that the speaker is sharing information they have heard but may not have confirmed themselves. It often conveys something widely believed.",
                explanationJpn: "「be supposed to」は、噂や風聞を伝えるときに使われます。話し手が直接確認していないが、そう信じられていることや言われていることを意味します。",
                examples: [
                    { eng: "The movie is supposed to be amazing, but I haven't seen it yet.", jpn: "その映画はすごいと言われていますが、まだ見ていません。" },
                    { eng: "The new iPhone is supposed to be launched this month.", jpn: "新しいiPhoneは今月発売されることになっているそうです。" }
                ]
            }
        ],
        expressions: [
            { eng: "First and foremost", jpn: "何よりも真っ先に" },
            { eng: "Moreover", jpn: "それに加えて" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "Looking at it another way", jpn: "別の言い方をすれば" },
            { eng: "In conclusion", jpn: "結論として" }
        ]
    },{
        level: "B2",
        id: 37,
        title: "Lesson 37: Opinion Exchange - The Shift to Electric Vehicles and Green Transportation",
        questions: [
            { eng: "1. Should governments make it illegal to manufacture and sell gas-powered cars after 2035?", jpn: "1. 政府は2035年以降、ガソリン車の製造と販売を違法とすべきですか？" },
            { eng: "2. Do you believe that electric vehicles (EVs) are truly better for the environment when considering battery production?", jpn: "2. バッテリーの生産を考慮した際、電気自動車（EV）は本当に環境に良いと思いますか？" },
            { eng: "3. How can cities improve their infrastructure to support a massive increase in electric vehicles?", jpn: "3. 都市は、電気自動車の大幅な増加を支えるためにインフラをどのように改善できますか？" },
            { eng: "4. Is it fair to heavily tax older, polluting vehicles if low-income families cannot afford new EVs?", jpn: "4. 低所得層の家族が新しいEVを買えない場合、古くて汚染を引き起こす車に重税を課すのは公平ですか？" },
            { eng: "5. What role should public transportation play in the future compared to individual car ownership?", jpn: "5. 個人の車の所有と比較して、公共交通機関は将来どのような役割を果たすべきですか？" },
            { eng: "6. Will autonomous (self-driving) electric taxis eventually replace the need for personal cars in urban areas?", jpn: "6. 自律型（自動運転）の電気タクシーは、最終的に都市部での自家用車の必要性に取って代わるでしょうか？" },
            { eng: "7. How do the aesthetics and sounds of electric vehicles change the traditional 'car culture'?", jpn: "7. 電気自動車のデザインや音は、伝統的な「車文化」をどのように変えますか？" },
            { eng: "8. Should employers be required to provide free EV charging stations at the workplace?", jpn: "8. 雇用主は職場で無料のEV充電ステーションを提供することを義務付けられるべきですか？" },
            { eng: "9. How can the aviation industry adapt to green energy given the heavy weight of modern batteries?", jpn: "9. 現代のバッテリーの重さを考慮すると、航空業界はどのようにグリーンエネルギーに適応できますか？" },
            { eng: "10. Would you feel anxious about 'range anxiety' (running out of battery) on a long road trip in an EV?", jpn: "10. EVでの長距離ドライブで「航続距離の不安（バッテリー切れ）」について不安を感じますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Present perfect: Emphasizing that something expected to happen has not yet occurred",
                explanation: "The present perfect simple used with 'still' in its negative form emphasizes that something expected to happen has not yet occurred and continues to remain unfinished. It conveys a sense of delay or an ongoing state of incompletion.",
                explanationJpn: "現在完了形の否定形と「still」を組み合わせると、期待されていたことがまだ起こっていないことを強調し、完了していない状態が続いていることを示します。",
                examples: [
                    { eng: "She still hasn't called me back.", jpn: "彼女はまだ私に電話をかけ直していません。" },
                    { eng: "We still haven't completed the project proposal.", jpn: "私たちはまだプロジェクト提案を完成させていません。" }
                ]
            },
            {
                point: "2. Formal: Indicating Extent or Coverage",
                explanation: "The word 'throughout' is used to express the extent or coverage of something across an entire area, period, or group. It emphasizes that an action, rule, or condition applies universally or consistently within a specific domain.",
                explanationJpn: "「throughout」は、特定の領域、期間、またはグループ全体にわたる範囲や適用範囲を表現するために使用されます。行動や条件が一貫して適用されることを強調します。",
                examples: [
                    { eng: "The new software will be rolled out throughout the organization.", jpn: "新しいソフトウェアは組織全体に展開されます。" },
                    { eng: "Throughout the year, we offer training sessions for employees.", jpn: "年間を通じて、従業員向けのトレーニングセッションを提供しています。" }
                ]
            }
        ],
        expressions: [
            { eng: "To start with", jpn: "まずは" },
            { eng: "Equally important is", jpn: "同様に重要なのは" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "Looking at it another way", jpn: "別の言い方をすれば" },
            { eng: "To summarize", jpn: "要約すれば" }
        ]
    },
    {
        level: "B2",
        id: 38,
        title: "Lesson 38: Opinion Exchange - The Influence of Globalization on Local Economies",
        questions: [
            { eng: "1. Does globalization ultimately create more jobs worldwide, or does it destroy local industries?", jpn: "1. グローバリゼーションは最終的に世界中でより多くの雇用を創出しますか、それとも地元産業を破壊しますか？" },
            { eng: "2. How has outsourcing manufacturing to developing nations affected the middle class in your country?", jpn: "2. 発展途上国への製造業のアウトソーシングは、あなたの国の中産階級にどのような影響を与えましたか？" },
            { eng: "3. Should consumers actively try to buy locally produced goods even if they are more expensive?", jpn: "3. 消費者は、たとえ高価であっても、地元で生産された商品を積極的に購入しようと努めるべきですか？" },
            { eng: "4. What happens to a country's cultural identity when multinational corporations dominate its retail sector?", jpn: "4. 多国籍企業が小売部門を支配したとき、国の文化的アイデンティティはどうなりますか？" },
            { eng: "5. Do international trade agreements typically favor wealthy nations over developing countries?", jpn: "5. 国際貿易協定は通常、発展途上国よりも富裕国に有利に働きますか？" },
            { eng: "6. How does the reliance on global supply chains make countries vulnerable during international crises?", jpn: "6. グローバルなサプライチェーンへの依存は、国際的危機の際に国々をどのように脆弱にしますか？" },
            { eng: "7. Is the concept of 'economic protectionism' (taxing foreign goods) an outdated idea in the modern world?", jpn: "7. 「経済保護主義」（外国製品に課税すること）の概念は、現代世界において時代遅れの考えですか？" },
            { eng: "8. How does globalization impact the diversity and availability of food in your local supermarkets?", jpn: "8. グローバリゼーションは、地元のスーパーマーケットにおける食品の多様性と入手にどのような影響を与えますか？" },
            { eng: "9. Should multinational corporations be forced to pay a global minimum tax rate regardless of where they operate?", jpn: "9. 多国籍企業は、事業を行う場所に関係なく、世界的な最低税率を支払うことを強制されるべきですか？" },
            { eng: "10. In your opinion, is it possible to reverse globalization, or is it an unstoppable force?", jpn: "10. あなたの意見では、グローバリゼーションを逆行させることは可能ですか、それとも止められない力ですか？" }
        ],
        grammarPoints: [
            {
                point: "1. Formal: Indicating Limits or Boundaries",
                explanation: "The preposition 'within' is used to express that something occurs inside a specific limit, boundary, or range. It can refer to time, space, quantity, or a defined area, indicating that an action or state is contained.",
                explanationJpn: "「within」は、特定の制限、境界、または範囲内で何かが起こることを表すために使用されます。行動や状態が特定の制限に収められていることを示します。",
                examples: [
                    { eng: "The project was finished within the deadline.", jpn: "プロジェクトは期限内に完了しました。" },
                    { eng: "All tasks must be completed within the allocated time.", jpn: "すべてのタスクは割り当てられた時間内に完了しなければなりません。" }
                ]
            },
            {
                point: "2. Formal: Indicating Cause or Justification",
                explanation: "The phrase 'in light of' is used to introduce a reason, cause, or justification for a change, action, or decision. It emphasizes the consideration of new information, events, or circumstances that influence the outcome.",
                explanationJpn: "「in light of」は、変更、行動、または決定の理由、原因、または正当性を示すために使用されます。新しい情報、出来事、または状況を考慮したことを強調します。",
                examples: [
                    { eng: "In light of customer feedback, the product design was modified.", jpn: "顧客のフィードバックに鑑みて、製品のデザインが変更されました。" },
                    { eng: "The schedule was adjusted in light of the team’s availability.", jpn: "チームのスケジュールに合わせて予定が調整されました。" }
                ]
            }
        ],
        expressions: [
            { eng: "First off", jpn: "まず最初に" },
            { eng: "In addition to", jpn: "～に加えて" },
            { eng: "Conversely", jpn: "逆に" },
            { eng: "Taking this a step further", jpn: "一歩進めて考えると" },
            { eng: "At the end of the day", jpn: "結局のところ" }
        ]
    },
    {
        level: "B2",
        id: 39,
        title: "Lesson 39: Opinion Exchange - The Ethics of Genetic Data and DNA Ancestry Kits",
        questions: [
            { eng: "1. Why do you think at-home DNA ancestry kits have become so popular in recent years?", jpn: "1. 近年、家庭用のDNA祖先検査キットがこれほどまでに人気になったのはなぜだと思いますか？" },
            { eng: "2. Are you concerned about what private genetic companies might do with your DNA profile?", jpn: "2. 民間の遺伝子企業があなたのDNAプロファイルをどう扱うかについて懸念していますか？" },
            { eng: "3. Should law enforcement agencies be allowed to use commercial DNA databases to solve cold cases?", jpn: "3. 警察機関は、未解決事件を解決するために商業用のDNAデータベースを使用することを許可されるべきですか？" },
            { eng: "4. What happens to personal privacy when one family member submits their DNA and exposes their relatives' genetic markers?", jpn: "4. 家族の1人がDNAを提出し、親戚の遺伝子マーカーを明らかにしてしまった場合、個人のプライバシーはどうなりますか？" },
            { eng: "5. Should health insurance companies be allowed to adjust premiums based on an individual's genetic predispositions?", jpn: "5. 健康保険会社は、個人の遺伝的素因に基づいて保険料を調整することを許可されるべきですか？" },
            { eng: "6. How might discovering a genetic predisposition to a serious illness impact a person's mental health?", jpn: "6. 重病に対する遺伝的素因を発見することは、個人のメンタルヘルスにどのような影響を与える可能性がありますか？" },
            { eng: "7. Do you believe that employers should have access to employees' genetic data to ensure workplace safety?", jpn: "7. 職場の安全を確保するために、雇用主が従業員の遺伝子データにアクセスできるべきだと思いますか？" },
            { eng: "8. How does knowing your genetic heritage change the way you view your cultural identity?", jpn: "8. 自分の遺伝的ルーツを知ることは、文化的アイデンティティの見方をどのように変えますか？" },
            { eng: "9. Should governments establish a centralized, heavily protected DNA database for all citizens?", jpn: "9. 政府は、全市民のための集中的で厳重に保護されたDNAデータベースを確立すべきですか？" },
            { eng: "10. If someone discovers a dark family secret through a DNA test, do they have a moral obligation to tell the rest of the family?", jpn: "10. DNA検査を通じて家族の暗い秘密を発見した場合、家族の他のメンバーに伝える道義的義務はありますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Formal: Indicating Contrast or Concession",
                explanation: "The phrase 'despite' is used to introduce a contrast or concession, showing that an action or situation occurs even though something might have hindered or contradicted it. It emphasizes persistence or determination in the face of obstacles.",
                explanationJpn: "「despite」は、対比や譲歩を示すために使用され、何かが障害となったり矛盾したりしても、行動や状況が起こることを示します。困難に直面しても持続することを強調します。",
                examples: [
                    { eng: "The team performed well despite the lack of resources.", jpn: "リソースが不足しているにもかかわらず、チームは良いパフォーマンスを発揮しました。" },
                    { eng: "The product launch was successful despite the initial setbacks.", jpn: "最初のつまずきにもかかわらず、製品の発売は成功しました。" }
                ]
            },
            {
                point: "2. Formal: Indicating Direction or Goal",
                explanation: "The preposition 'towards' is used to indicate a movement, action, or effort aimed at achieving a goal or target. In professional and formal contexts, it is often used to express the aim or objective of ongoing efforts.",
                explanationJpn: "「towards」は、目的や目標を達成するための動き、行動、または努力を示すために使用されます。ビジネスやフォーマルな文脈では、進行中の努力の目的や目標を表現します。",
                examples: [
                    { eng: "The organization is committed to moving towards greater transparency.", jpn: "組織はより高い透明性に向けて進んでいます。" },
                    { eng: "Steps are being taken towards enhancing customer satisfaction.", jpn: "顧客満足度の向上に向けて措置が取られています。" }
                ]
            }
        ],
        expressions: [
            { eng: "To begin with", jpn: "はじめに" },
            { eng: "Furthermore", jpn: "その上" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "In view of the fact that", jpn: "～という事実に鑑みて" },
            { eng: "All things considered", jpn: "総合的に考慮すると" }
        ]
    },{
        level: "B2",
        id: 40,
        title: "Lesson 40: Opinion Exchange - The Ethics of Deepfakes and Synthetic Media",
        questions: [
            { eng: "1. Should the creation of deepfake videos featuring real people without their consent be a criminal offense?", jpn: "1. 本人の同意なしに実在の人物のディープフェイク動画を作成することは、刑事罰の対象となるべきですか？" },
            { eng: "2. How does the existence of hyper-realistic synthetic media threaten the credibility of legitimate news journalism?", jpn: "2. 超リアルな合成メディアの存在は、正当なニュース・ジャーナリズムの信頼性をどのように脅かしますか？" },
            { eng: "3. Could deepfake technology be used positively in the film and entertainment industry?", jpn: "3. ディープフェイク技術は、映画やエンターテインメント業界で肯定的に使用される可能性がありますか？" },
            { eng: "4. What are the potential dangers of deepfakes being used in political campaigns to manipulate elections?", jpn: "4. 選挙を操作するために政治キャンペーンでディープフェイクが使用されることの潜在的な危険性は何ですか？" },
            { eng: "5. Do social media platforms have a moral obligation to immediately detect and remove AI-generated misinformation?", jpn: "5. ソーシャルメディアプラットフォームには、AIが生成した誤情報を即座に検出して削除する道義的義務がありますか？" },
            { eng: "6. How can average internet users protect themselves from being deceived by highly convincing audio deepfakes?", jpn: "6. 一般のインターネットユーザーは、非常に説得力のある音声ディープフェイクに騙されないようにどのように身を守ることができますか？" },
            { eng: "7. Is it ethical to digitally 'resurrect' deceased actors to star in new movies?", jpn: "7. 新しい映画に出演させるために、亡くなった俳優をデジタルで「復活」させることは倫理的ですか？" },
            { eng: "8. Should all AI-generated content be legally required to carry a visible watermark indicating it is synthetic?", jpn: "8. すべてのAI生成コンテンツには、合成であることを示す目に見える透かしを入れることを法的に義務付けるべきですか？" },
            { eng: "9. How might deepfake technology be weaponized to ruin an ordinary person's reputation?", jpn: "9. ディープフェイク技術は、一般人の評判を落とすためにどのように兵器化（悪用）される可能性がありますか？" },
            { eng: "10. In a world where seeing is no longer believing, how will the judicial system handle video evidence in court?", jpn: "10. 見たものが信じられなくなる世界において、司法制度は法廷でのビデオ証拠をどのように扱うようになるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Complex: Highlighting Contrast or Difference",
                explanation: "The preposition 'as opposed to' is used to emphasize a contrast or a difference between two elements, ideas, or situations. It is often employed when comparing two things to show how they are distinct from each other.",
                explanationJpn: "「as opposed to」は、2つの要素、アイデア、または状況の間の対比や違いを強調するために使用されます。フォーマルな文脈で概念の違いを明確にするのに役立ちます。",
                examples: [
                    { eng: "They prefer remote work as opposed to commuting daily.", jpn: "彼らは毎日の通勤よりもリモートワークを好みます。" },
                    { eng: "The policy supports long-term growth as opposed to short-term gains.", jpn: "この方針は短期的な利益ではなく、長期的な成長を支援しています。" }
                ]
            },
            {
                point: "2. Complex: Indicating Sacrifice or Trade-Offs",
                explanation: "The phrase 'at the expense of' is used to indicate that one thing is achieved, pursued, or prioritized at the cost or sacrifice of something else. It highlights a trade-off or a compromise.",
                explanationJpn: "「at the expense of」は、あることが達成されたり優先されたりする際に、別の何かが犠牲にされていることを示します。トレードオフや妥協点を強調します。",
                examples: [
                    { eng: "They increased productivity at the expense of employee well-being.", jpn: "従業員の福祉を犠牲にして、生産性を向上させました。" },
                    { eng: "The new policy encourages growth at the expense of environmental sustainability.", jpn: "新しい方針は環境の持続可能性を犠牲にして成長を促進しています。" }
                ]
            }
        ],
        expressions: [
            { eng: "First off", jpn: "まず第一に" },
            { eng: "What’s more", jpn: "さらに驚くべきことに" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "By and large", jpn: "概して" },
            { eng: "In short", jpn: "手短に言えば" }
        ]
    },
    {
        level: "B2",
        id: 41,
        title: "Lesson 41: Opinion Exchange - The Future of Marriage and Family Structures",
        questions: [
            { eng: "1. Why do you think marriage rates are significantly declining in many developed nations?", jpn: "1. 多くの先進国で結婚率が大幅に低下しているのはなぜだと思いますか？" },
            { eng: "2. Is the traditional 'nuclear family' model outdated in modern society?", jpn: "2. 伝統的な「核家族」モデルは、現代社会においては時代遅れですか？" },
            { eng: "3. How does the rising cost of living impact a couple's decision to have children?", jpn: "3. 生活費の高騰は、カップルが子供を持つという決定にどのような影響を与えますか？" },
            { eng: "4. Should governments provide more financial incentives to encourage people to start families?", jpn: "4. 政府は人々が家族を持つのを奨励するために、より多くの財政的インセンティブ（優遇措置）を提供すべきですか？" },
            { eng: "5. How has the equalization of gender roles in the workplace changed relationship dynamics at home?", jpn: "5. 職場における性別役割の平等化は、家庭での関係性のダイナミクスをどのように変えましたか？" },
            { eng: "6. Do you believe that children raised by single parents face more societal challenges than those raised by two parents?", jpn: "6. ひとり親に育てられた子供は、ふたり親に育てられた子供よりも多くの社会的課題に直面すると思いますか？" },
            { eng: "7. How do societal expectations regarding marriage pressure young professionals today?", jpn: "7. 結婚に関する社会的期待は、今日の若い社会人にどのようなプレッシャーを与えていますか？" },
            { eng: "8. Is the concept of a 'lifelong partnership' becoming harder to maintain due to longer life expectancies?", jpn: "8. 平均寿命が延びたことにより、「生涯のパートナーシップ」という概念を維持するのは難しくなっていますか？" },
            { eng: "9. How does corporate culture need to change to better support working parents?", jpn: "9. 働く親をより良く支援するために、企業文化はどのように変わる必要がありますか？" },
            { eng: "10. In your opinion, will marriage eventually be seen as a purely legal contract rather than a romantic milestone?", jpn: "10. あなたの意見では、結婚は最終的にロマンチックな節目というよりも、純粋に法的な契約として見られるようになるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Complex: Explaining the Cause or Reason",
                explanation: "The phrase 'by virtue of' is used to explain the cause, reason, or basis for something happening or being true. It is often employed in formal and academic contexts to show that an action exists due to a specific factor.",
                explanationJpn: "「by virtue of」は、何かが起こる原因や理由、またはそれが真実である根拠を説明するために使用されます。特定の要因によって特質が存在していることを示します。",
                examples: [
                    { eng: "He was promoted by virtue of his leadership skills.", jpn: "彼はリーダーシップスキルのおかげで昇進しました。" },
                    { eng: "The school received an award by virtue of its high academic performance.", jpn: "その学校は学業成績の高さのおかげで賞を受け取りました。" }
                ]
            },
            {
                point: "2. Complex: Describing a Time Period or Duration",
                explanation: "The phrase 'during the course of' is used to describe actions, events, or processes that occur over a specific time period. It emphasizes that something takes place throughout an entire duration.",
                explanationJpn: "「during the course of」は、特定の期間にわたって発生する行動や出来事を説明するために使用されます。ある期間全体を通じて何かが行われることを強調します。",
                examples: [
                    { eng: "Several updates were made during the course of the project.", jpn: "プロジェクトの期間中にいくつかのアップデートが行われました。" },
                    { eng: "The company expanded significantly during the course of the last decade.", jpn: "その会社は過去10年間にわたって大幅に拡大しました。" }
                ]
            }
        ],
        expressions: [
            { eng: "To start with", jpn: "まずは" },
            { eng: "In addition", jpn: "さらに" },
            { eng: "In contrast to this", jpn: "これとは対照的に" },
            { eng: "In view of the fact that", jpn: "～という事実に鑑みて" },
            { eng: "All things considered", jpn: "総合的に考慮すると" }
        ]
    },
    {
        level: "B2",
        id: 42,
        title: "Lesson 42: Opinion Exchange - Consumerism and Minimalist Lifestyles",
        questions: [
            { eng: "1. Does accumulating material possessions truly contribute to a person's long-term happiness?", jpn: "1. 物質的な所有物を蓄積することは、個人の長期的な幸福に本当に貢献しますか？" },
            { eng: "2. How has social media accelerated the culture of fast fashion and overconsumption?", jpn: "2. ソーシャルメディアは、ファストファッションと過剰消費の文化をどのように加速させましたか？" },
            { eng: "3. What are the main environmental consequences of constantly upgrading our electronics and smartphones?", jpn: "3. 電子機器やスマートフォンを常にアップグレードし続けることの主な環境的影響は何ですか？" },
            { eng: "4. Do you believe that minimalism is a practical lifestyle, or is it just a passing trend for the privileged?", jpn: "4. ミニマリズムは実用的なライフスタイルだと思いますか、それとも特権階級の単なる一時的な流行ですか？" },
            { eng: "5. How do targeted online advertisements manipulate our desires to buy things we do not need?", jpn: "5. ターゲットを絞ったオンライン広告は、必要のないものを買いたいという私たちの欲求をどのように操作していますか？" },
            { eng: "6. Would society be better off if we placed more value on experiences rather than physical goods?", jpn: "6. 物理的な商品よりも「体験」により多くの価値を置くようになれば、社会はより良くなるでしょうか？" },
            { eng: "7. Why is it so psychologically difficult for many people to declutter and get rid of old possessions?", jpn: "7. 多くの人にとって、片付けをして古い所有物を処分することが心理的にそれほど難しいのはなぜですか？" },
            { eng: "8. Should brands be legally required to create products that last longer and are easier to repair?", jpn: "8. ブランドは、より長持ちし、修理しやすい製品を作ることを法的に義務付けられるべきですか？" },
            { eng: "9. How does peer pressure influence the spending habits of teenagers and young adults?", jpn: "9. 同調圧力は、10代の若者や若い大人の消費習慣にどのような影響を与えますか？" },
            { eng: "10. Can a heavily consumer-driven economy ever be truly sustainable?", jpn: "10. 消費主導の経済が真に持続可能になることはあり得るでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Complex: Expressing Purpose or Reason",
                explanation: "The phrase 'for the sake of' is used to express a purpose, reason, or motivation behind an action. It emphasizes doing something to achieve a positive outcome or maintain a certain principle.",
                explanationJpn: "「for the sake of」は、行動の目的、理由、または動機を表現するために使用されます。良い結果を達成するため、または特定の価値を維持するために何かをすることを強調します。",
                examples: [
                    { eng: "She studied hard for the sake of her future.", jpn: "彼女は将来のために一生懸命勉強しました。" },
                    { eng: "For the sake of safety, the company implemented new guidelines.", jpn: "安全のために、その会社は新しいガイドラインを導入しました。" }
                ]
            },
            {
                point: "2. Complex: Expressing Differences or Comparisons",
                explanation: "The phrase 'in contrast to' is used to highlight differences between two things, ideas, or situations. It emphasizes how one element differs significantly from another, drawing clear comparisons.",
                explanationJpn: "「in contrast to」は、2つの物事、考え、または状況の違いを強調するために使用されます。ある要素が別の要素とどのように大きく異なるかを強調します。",
                examples: [
                    { eng: "In contrast to her usual behavior, she was very active during the meeting.", jpn: "彼女の普段の行動とは対照的に、彼女は会議中とても活発でした。" },
                    { eng: "The new design, in contrast to the old one, is more modern and user-friendly.", jpn: "新しいデザインは、古いデザインとは対照的に、よりモダンで使いやすくなっています。" }
                ]
            }
        ],
        expressions: [
            { eng: "As a matter of fact", jpn: "実際のところ" },
            { eng: "Moreover", jpn: "それに加えて" },
            { eng: "Conversely", jpn: "逆に" },
            { eng: "As a general rule", jpn: "一般規則として" },
            { eng: "To sum up", jpn: "まとめると" }
        ]
    },{
        level: "B2",
        id: 43,
        title: "Lesson 43: Opinion Exchange - Aging Populations and Social Welfare",
        questions: [
            { eng: "1. How should society adapt to the economic pressures of a rapidly aging population?", jpn: "1. 急速な高齢化による経済的圧力に、社会はどのように適応すべきですか？" },
            { eng: "2. Do you believe the official retirement age should be raised to 70 or higher to sustain pension systems?", jpn: "2. 年金制度を維持するために、公式な定年退職年齢を70歳以上に引き上げるべきだと思いますか？" },
            { eng: "3. Is it the government's responsibility to provide free eldercare, or should families bear the primary cost?", jpn: "3. 無料の高齢者介護を提供するのは政府の責任ですか、それとも家族が主な費用を負担すべきですか？" },
            { eng: "4. What role should immigration play in supporting countries with declining birth rates and shrinking workforces?", jpn: "4. 出生率の低下と労働力の減少に直面している国を支援する上で、移民はどのような役割を果たすべきですか？" },
            { eng: "5. How might the widespread use of caregiving robots affect the emotional well-being of the elderly?", jpn: "5. 介護ロボットの普及は、高齢者の精神的健康にどのような影響を与える可能性がありますか？" },
            { eng: "6. Should younger generations be taxed more heavily to support the growing number of retirees?", jpn: "6. 増加する退職者を支援するために、若い世代により重い税金を課すべきですか？" },
            { eng: "7. How can cities redesign their infrastructure to be more accessible for elderly citizens?", jpn: "7. 都市は、高齢市民にとってよりアクセスしやすいようにインフラをどのように再設計できますか？" },
            { eng: "8. Will a shrinking workforce ultimately slow down technological and economic innovation?", jpn: "8. 労働力の減少は、最終的に技術的および経済的革新を遅らせるでしょうか？" },
            { eng: "9. Should individuals be legally required to save a specific portion of their income for retirement?", jpn: "9. 個人は、退職後のために収入の特定の部分を貯蓄することを法的に義務付けられるべきですか？" },
            { eng: "10. How does the shifting demographic balance affect political power and election outcomes?", jpn: "10. 人口動態のバランスの変化は、政治的権力や選挙結果にどのような影響を与えますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Complex: Expressing Disagreement or Contrast",
                explanation: "The phrase 'in opposition to' is used to express disagreement or contrast between two ideas, actions, or situations. It emphasizes how one element actively disagrees with, contradicts, or challenges another.",
                explanationJpn: "「in opposition to」は、2つの考え、行動、または状況の間の対立や反対を表現するために使用されます。ある要素が別の要素に積極的に反対し、矛盾していることを強調します。",
                examples: [
                    { eng: "In opposition to the manager’s decision, several employees filed a complaint.", jpn: "マネージャーの決定に反対して、数人の従業員が苦情を申し立てました。" },
                    { eng: "The environmental group organized a protest in opposition to the construction project.", jpn: "環境団体は建設プロジェクトに反対して抗議を組織しました。" }
                ]
            },
            {
                point: "2. Complex: Expressing Contingency or Preparation",
                explanation: "The phrase 'in case of' is used to introduce a contingency or precautionary measure, indicating a situation where something might happen and steps or preparations are taken accordingly.",
                explanationJpn: "「in case of」は、何かが起こる可能性がある状況を紹介し、それに応じて対策や準備が取られていることを示すために使用されます。",
                examples: [
                    { eng: "In case of a power outage, a backup generator will activate automatically.", jpn: "停電の場合、バックアップ発電機が自動的に作動します。" },
                    { eng: "In case of illness, employees are required to submit a medical certificate.", jpn: "病気の場合、従業員は医師の証明書を提出する必要があります。" }
                ]
            }
        ],
        expressions: [
            { eng: "First off", jpn: "まず第一に" },
            { eng: "Additionally", jpn: "さらに" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "As a consequence", jpn: "その結果として" },
            { eng: "All in all", jpn: "全体として" }
        ]
    },
    {
        level: "B2",
        id: 44,
        title: "Lesson 44: Opinion Exchange - The Subscription Economy",
        questions: [
            { eng: "1. Do you prefer buying products outright, or do you prefer paying for monthly subscriptions?", jpn: "1. 商品を一括で購入するのと、月額のサブスクリプションを支払うのとでは、どちらが好きですか？" },
            { eng: "2. How does the 'software as a service' model benefit both consumers and large corporations?", jpn: "2. 「Software as a Service（SaaS）」モデルは、消費者と大企業の両方にどのような利益をもたらしますか？" },
            { eng: "3. Are people losing the sense of personal ownership in the modern digital economy?", jpn: "3. 現代のデジタル経済において、人々は個人的な所有感を失いつつありますか？" },
            { eng: "4. What are the hidden financial dangers of having too many automatic monthly subscriptions?", jpn: "4. 月額の自動サブスクリプションを多く持ちすぎることの、隠れた財政的危険性は何ですか？" },
            { eng: "5. Should companies make it legally easier for customers to cancel their subscriptions online?", jpn: "5. 企業は、顧客がオンラインでサブスクリプションをキャンセルするのを法的に容易にすべきですか？" },
            { eng: "6. Will the subscription model eventually expand to everyday items like clothing and groceries?", jpn: "6. サブスクリプションモデルは最終的に、衣料品や食料品などの日常品にも拡大するでしょうか？" },
            { eng: "7. How do subscription services use psychological tactics to keep users engaged and paying?", jpn: "7. サブスクリプションサービスは、ユーザーを引き付け、支払いを継続させるためにどのような心理的戦術を使用していますか？" },
            { eng: "8. Is it ethical for companies to intentionally hide the 'cancel subscription' button deep in their settings?", jpn: "8. 企業が意図的に「サブスクリプションをキャンセルする」ボタンを設定の奥深くに隠すことは倫理的ですか？" },
            { eng: "9. Do subscription models encourage companies to provide continuous updates and better quality?", jpn: "9. サブスクリプションモデルは、企業が継続的なアップデートとより良い品質を提供することを奨励しますか？" },
            { eng: "10. Would you subscribe to a service that provides you with a new car every six months instead of buying one?", jpn: "10. 車を買う代わりに、半年ごとに新しい車を提供してくれるサービスに登録しますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Complex: Expressing Effort or Seeking",
                explanation: "The phrase 'in search of' is used to indicate an effort or an action taken to find or obtain something. It emphasizes the proactive and often purposeful pursuit of an object, person, or goal.",
                explanationJpn: "「in search of」は、何かを見つけたり得たりするための努力や行動を示すために使用されます。目的の物や目標を追求する積極的な行動を強調します。",
                examples: [
                    { eng: "She went to the library in search of information for her project.", jpn: "彼女はプロジェクトの情報を求めて図書館に行きました。" },
                    { eng: "Many people move to big cities in search of job opportunities.", jpn: "多くの人が仕事の機会を求めて大都市に移住します。" }
                ]
            },
            {
                point: "2. Complex: Expressing Connections or Context",
                explanation: "The phrase 'in relation to' is used to show a connection or association between two elements. It highlights how one element affects, influences, or is relevant to another.",
                explanationJpn: "「in relation to」は、2つの要素の間の関連性や関係性を示すために使用されます。一方の要素がもう一方にどのように影響を与えるか、または関連するかを強調します。",
                examples: [
                    { eng: "The report highlights several issues in relation to the company's finances.", jpn: "報告書は会社の財務に関連するいくつかの問題を指摘しています。" },
                    { eng: "The policies were updated in relation to customer feedback.", jpn: "顧客からのフィードバックに関連してポリシーが更新されました。" }
                ]
            }
        ],
        expressions: [
            { eng: "To begin with", jpn: "はじめに" },
            { eng: "Furthermore", jpn: "その上" },
            { eng: "By contrast", jpn: "対照的に" },
            { eng: "Given that", jpn: "～という事実を踏まえると" },
            { eng: "In conclusion", jpn: "結論として" }
        ]
    },
    {
        level: "B2",
        id: 45,
        title: "Lesson 45: Opinion Exchange - The Right to Disconnect",
        questions: [
            { eng: "1. Should it be completely illegal for employers to contact their staff after official working hours?", jpn: "1. 公式の勤務時間後に雇用主がスタッフに連絡することは完全に違法とされるべきですか？" },
            { eng: "2. How does constant digital connectivity affect an employee's mental health and family life?", jpn: "2. 絶え間ないデジタル接続は、従業員のメンタルヘルスや家庭生活にどのような影響を与えますか？" },
            { eng: "3. Do you feel pressured to reply to work emails immediately, even on weekends?", jpn: "3. 週末であっても、仕事のメールにすぐに返信しなければならないというプレッシャーを感じますか？" },
            { eng: "4. How can multinational companies respect the 'right to disconnect' when operating across different time zones?", jpn: "4. 多国籍企業は、異なるタイムゾーンで事業を行う際、どのように「つながらない権利」を尊重できますか？" },
            { eng: "5. Does answering emails late at night make an employee look more dedicated or just poorly organized?", jpn: "5. 夜遅くにメールを返信することは、従業員をより献身的に見せますか、それとも単に自己管理ができていないように見せますか？" },
            { eng: "6. What are the long-term consequences for a company that normalizes a culture of constant overtime?", jpn: "6. 恒常的な残業の文化を常態化させている企業の長期的な結果はどうなりますか？" },
            { eng: "7. Should smartphones come with built-in features that automatically block work communications after 6 PM?", jpn: "7. スマートフォンには、午後6時以降の仕事の通信を自動的にブロックする機能が組み込まれているべきですか？" },
            { eng: "8. Is the 'right to disconnect' only a realistic privilege for white-collar office workers?", jpn: "8. 「つながらない権利」は、ホワイトカラーのオフィスワーカーにとってのみ現実的な特権ですか？" },
            { eng: "9. How would strictly enforcing working hours impact the overall agility and speed of a business?", jpn: "9. 労働時間を厳格に適用することは、ビジネスの全体的な機敏性（アジリティ）とスピードにどのような影響を与えますか？" },
            { eng: "10. Do individuals have a personal responsibility to turn off their own devices, regardless of company policy?", jpn: "10. 会社のポリシーに関係なく、個人には自身のデバイスの電源を切る個人的な責任がありますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Complex: Expressing Specific Aspects or Perspectives",
                explanation: "The phrase 'in terms of' is used to focus on a particular aspect, perspective, or factor when discussing a situation, idea, or comparison. It helps specify the criteria or viewpoint being considered.",
                explanationJpn: "「in terms of」は、状況、考え、または比較を議論するときに特定の側面、観点、または要因に焦点を当てるために使用されます。検討されている基準や視点を明確にします。",
                examples: [
                    { eng: "In terms of customer satisfaction, the new policy has been very effective.", jpn: "顧客満足度の面では、新しいポリシーは非常に効果的です。" },
                    { eng: "In terms of technology, our team has made significant advancements.", jpn: "技術の面では、私たちのチームは大きな進展を遂げました。" }
                ]
            },
            {
                point: "2. Complex: Expressing Ongoing or Progressive Actions",
                explanation: "The phrase 'in the course of' is used to describe actions, events, or processes that occur during a period of time or while something else is happening. It emphasizes the progression of an action.",
                explanationJpn: "「in the course of」は、ある期間中または他の何かが起こっている間に発生する行動やプロセスを説明するために使用されます。特定の期間内での行動の進行を強調します。",
                examples: [
                    { eng: "In the course of the investigation, new evidence was discovered.", jpn: "調査の過程で、新しい証拠が発見されました。" },
                    { eng: "Several updates were made in the course of developing the software.", jpn: "ソフトウェアの開発過程でいくつかの更新が行われました。" }
                ]
            }
        ],
        expressions: [
            { eng: "First and foremost", jpn: "何よりも真っ先に" },
            { eng: "Moreover", jpn: "それに加えて" },
            { eng: "Conversely", jpn: "逆に" },
            { eng: "Due to the fact that", jpn: "～という理由から" },
            { eng: "To summarize", jpn: "要約すれば" }
        ]
    },
    {
        level: "B2",
        id: 46,
        title: "Lesson 46: Opinion Exchange - Plastic Pollution and Corporate Accountability",
        questions: [
            { eng: "1. Who is more responsible for reducing plastic waste: individual consumers or large corporations?", jpn: "1. プラスチック廃棄物の削減について、個人消費者と大企業のどちらがより責任を負うべきですか？" },
            { eng: "2. Should single-use plastics be globally banned, even if it significantly inconveniences daily life?", jpn: "2. たとえ日常生活に大きな不便をもたらすとしても、使い捨てプラスチックは世界的に禁止されるべきですか？" },
            { eng: "3. Do recycling programs actually work, or do they just make consumers feel less guilty about producing trash?", jpn: "3. リサイクルプログラムは実際に機能していますか、それとも単に消費者がゴミを出すことへの罪悪感を軽減させているだけですか？" },
            { eng: "4. Should governments tax companies heavily based on the amount of non-recyclable packaging they produce?", jpn: "4. 政府は、企業が生産するリサイクル不可能な包装の量に基づいて、企業に重税を課すべきですか？" },
            { eng: "5. How has the convenience of online shopping contributed to the global packaging waste crisis?", jpn: "5. オンラインショッピングの利便性は、世界的な包装廃棄物の危機にどのように寄与していますか？" },
            { eng: "6. Are biodegradable alternatives (like paper straws) truly a better solution, or do they cause other environmental issues?", jpn: "6. 生分解性の代替品（紙ストローなど）は本当に優れた解決策ですか、それとも他の環境問題を引き起こしますか？" },
            { eng: "7. Why is it so difficult to clean up the microplastics already polluting our oceans?", jpn: "7. すでに海を汚染しているマイクロプラスチックを取り除くことがなぜそれほど難しいのですか？" },
            { eng: "8. Do developing countries unfairly suffer from the plastic waste exported by wealthier nations?", jpn: "8. 発展途上国は、富裕国によって輸出されたプラスチック廃棄物によって不当に苦しんでいますか？" },
            { eng: "9. Would you be willing to pay a premium price for products that guarantee zero-plastic packaging?", jpn: "9. ゼロプラスチック包装を保証する製品に対して、プレミアム（割増）価格を支払う意思はありますか？" },
            { eng: "10. How can we shift societal mindsets from a 'throwaway culture' to a 'circular economy'?", jpn: "10. 社会の考え方を「使い捨て文化」から「循環型経済」へどのように移行させることができますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Complex: Expressing Considerations or Reasons",
                explanation: "The phrase 'in view of' is used to express a reason, consideration, or factor that influences a decision or action. It indicates that something is taken into account when making a choice.",
                explanationJpn: "「in view of」は、決定や行動に影響を与える理由、考慮事項、または要因を表すために使用されます。何かを考慮に入れて決定を下す際に使われる表現です。",
                examples: [
                    { eng: "In view of the recent developments, we have decided to update our policies.", jpn: "最近の進展を考慮して、私たちはポリシーを更新することに決めました。" },
                    { eng: "The project was halted in view of the safety concerns raised by experts.", jpn: "専門家が提起した安全上の懸念を考慮して、プロジェクトは停止されました。" }
                ]
            },
            {
                point: "2. Complex: Expressing Reciprocal Actions or Agreements",
                explanation: "The phrase 'in exchange for' is used to indicate that one action, service, or item is given in return for another. It highlights a reciprocal arrangement or trade.",
                explanationJpn: "「in exchange for」は、ある行動、サービス、または物が他の物と引き換えに与えられることを示します。価値のある物やサービスの交換、または合意を伴う双方向の取り決めを強調します。",
                examples: [
                    { eng: "She agreed to work extra hours in exchange for additional vacation days.", jpn: "彼女は追加の休暇日と引き換えに、余分な時間働くことに同意しました。" },
                    { eng: "The government provided funds in exchange for compliance with new regulations.", jpn: "政府は新しい規則への遵守と引き換えに資金を提供しました。" }
                ]
            }
        ],
        expressions: [
            { eng: "To start with", jpn: "まずは" },
            { eng: "Equally important is", jpn: "同様に重要なのは" },
            { eng: "In spite of", jpn: "～にもかかわらず" },
            { eng: "Considering", jpn: "～であることを考慮すると" },
            { eng: "To sum up", jpn: "まとめると" }
        ]
    },
    {
        level: "B2",
        id: 47,
        title: "Lesson 47: Opinion Exchange - The Commercialization of Traditional Holidays",
        questions: [
            { eng: "1. Have traditional holidays completely lost their original cultural and religious meanings?", jpn: "1. 伝統的な休日は、本来の文化的および宗教的意味を完全に失ってしまいましたか？" },
            { eng: "2. Do you feel pressured by society and advertising to spend beyond your budget during the holiday season?", jpn: "2. ホリデーシーズン中、社会や広告によって予算を超えてお金を使うようにプレッシャーを感じますか？" },
            { eng: "3. How does the commercialization of holidays affect people who cannot afford expensive gifts?", jpn: "3. 祝日の商業化は、高価な贈り物を買えない人々にどのような影響を与えますか？" },
            { eng: "4. Should retail stores be forced to remain closed on major national holidays to allow workers to rest?", jpn: "4. 労働者が休めるように、主要な国民の祝日には小売店の休業を強制されるべきですか？" },
            { eng: "5. Is the act of exchanging gifts a genuine display of affection or merely a stressful obligation?", jpn: "5. 贈り物を交換する行為は、真の愛情の表れですか、それとも単なるストレスの多い義務ですか？" },
            { eng: "6. How has the invention of artificial 'shopping holidays' (like Black Friday or Cyber Monday) changed consumer behavior?", jpn: "6. 人工的な「ショッピングの祝日」（ブラックフライデーやサイバーマンデーなど）の発明は、消費者の行動をどのように変えましたか？" },
            { eng: "7. Do excessive holiday decorations and packaging contribute significantly to environmental waste?", jpn: "7. 過剰な休日の装飾や包装は、環境廃棄物に大きく寄与していますか？" },
            { eng: "8. How do multinational corporations exploit local cultural festivals for their own global marketing?", jpn: "8. 多国籍企業は、自社のグローバルマーケティングのために地元の文化祭をどのように利用していますか？" },
            { eng: "9. Can a family successfully celebrate a major holiday without spending any money on material goods?", jpn: "9. 家族は物質的な品物にお金を一切使わずに、主要な祝日を成功裏に祝うことができますか？" },
            { eng: "10. In the future, will new holidays be created purely for corporate profit rather than historical significance?", jpn: "10. 将来、歴史的な重要性よりも純粋に企業の利益のために新しい祝日が作られるようになるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. Complex: Expressing Combination or Accompaniment",
                explanation: "The phrase 'together with' is used to express combination or accompaniment. It indicates that one thing, person, or action is accompanied by or combined with another, emphasizing cooperation or accumulation.",
                explanationJpn: "「together with」は、組み合わせや同行を表現するために使われます。1つの物や人、行動が他の物と共にあることを示し、協力やパートナーシップを強調します。",
                examples: [
                    { eng: "The CEO, together with the board members, announced the new business strategy.", jpn: "CEOは取締役会のメンバーと共に、新しいビジネス戦略を発表しました。" },
                    { eng: "The company, together with its partners, launched a new product line.", jpn: "会社はパートナーと共に、新しい製品ラインを立ち上げました。" }
                ]
            },
            {
                point: "2. Complex: Expressing Additional Information",
                explanation: "The phrase 'in addition to' is used to introduce additional information or elements related to the main subject. It connects extra details, emphasizing that the mentioned information is supplementary.",
                explanationJpn: "「in addition to」は、主題に関連する追加の情報や要素を紹介するために使用されます。追加された情報が主な考えを補完するものであることを強調します。",
                examples: [
                    { eng: "In addition to developing software, the company also provides consulting services.", jpn: "ソフトウェアの開発に加えて、会社はコンサルティングサービスも提供しています。" },
                    { eng: "In addition to their high-quality products, they offer excellent customer support.", jpn: "高品質な製品に加えて、彼らは優れたカスタマーサポートも提供しています。" }
                ]
            }
        ],
        expressions: [
            { eng: "As a matter of fact", jpn: "実際のところ" },
            { eng: "Along with this", jpn: "これに伴い" },
            { eng: "On the flip side", jpn: "裏を返せば" },
            { eng: "In view of the fact that", jpn: "～という事実に鑑みて" },
            { eng: "Overall", jpn: "総合的に見て" }
        ]
    },
    {
        level: "B2",
        id: 48,
        title: "Lesson 48: Opinion Exchange - Mandatory Voting and Civic Duty",
        questions: [
            { eng: "1. Should voting in national elections be a legal obligation for all eligible citizens?", jpn: "1. 国政選挙での投票は、すべての有権者に対する法的義務とされるべきですか？" },
            { eng: "2. Does a low voter turnout indicate a content and peaceful society, or a broken democracy?", jpn: "2. 低い投票率は、満足して平和な社会を示していますか、それとも壊れた民主主義を示していますか？" },
            { eng: "3. If voting were mandatory, would the overall quality of political campaigns improve or deteriorate?", jpn: "3. もし投票が義務化されたら、政治運動（選挙戦）の全体的な質は向上するでしょうか、それとも悪化するでしょうか？" },
            { eng: "4. Is choosing not to vote a valid form of political protest?", jpn: "4. 投票しないことを選択することは、政治的抗議の有効な形態ですか？" },
            { eng: "5. How should a government punish individuals who refuse to vote in a mandatory system?", jpn: "5. 義務化されたシステムにおいて、投票を拒否する個人を政府はどのように処罰すべきですか？" },
            { eng: "6. Do you believe that uninformed citizens should be encouraged to vote, or does that harm the country?", jpn: "6. 情報を持たない市民も投票するよう奨励されるべきだと思いますか、それともそれは国に害を及ぼしますか？" },
            { eng: "7. Would lowering the voting age to 16 encourage greater long-term civic engagement?", jpn: "7. 選挙権年齢を16歳に引き下げることは、より大きな長期的な市民参加を促進するでしょうか？" },
            { eng: "8. How do digital voting platforms compromise or enhance election security?", jpn: "8. デジタル投票プラットフォームは、選挙の安全性をどのように脅かすか、または強化しますか？" },
            { eng: "9. Should voters be required to pass a basic political knowledge test before casting a ballot?", jpn: "9. 有権者は投票する前に基本的な政治知識テストに合格することを義務付けられるべきですか？" },
            { eng: "10. How would mandatory voting change the types of politicians who get elected into office?", jpn: "10. 義務投票制は、選出される政治家の種類をどのように変えるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. present simple: Emphasizing two related statements",
                explanation: "The present simple inversion with 'not only ... but also' is used to emphasize two related statements by highlighting their importance. It inverts the subject and auxiliary verb, showing that both parts of the statement are equally significant.",
                explanationJpn: "現在形の「not only ... but also」を用いた倒置構造は、関連する2つの文を強調し、その重要性を際立たせるために使われます。主語と助動詞を倒置することで、文の両部分が同等に重要であることを示します。",
                examples: [
                    { eng: "Not only does the company focus on profits, but it also invests in employee welfare.", jpn: "その会社は利益に集中するだけでなく、従業員の福祉にも投資しています。" },
                    { eng: "Not only do we offer a wide range of products, but we also provide 24/7 customer support.", jpn: "私たちは幅広い商品を提供するだけでなく、24時間対応のカスタマーサポートも提供しています。" }
                ]
            },
            {
                point: "2. present simple: Expressing actions that occur when the statement is made",
                explanation: "The present simple is often used with speech act verbs to express actions that occur when the statement is made. These verbs perform the action they describe at the moment of speaking, making the conversation more direct.",
                explanationJpn: "現在形は、発話行為動詞とともに使用されることが多く、発話されたときに行動が実行されることを表現します。これらの動詞は話す瞬間に動作を行い、会話をより直接的にします。",
                examples: [
                    { eng: "I disagree with the proposed changes.", jpn: "提案された変更に同意しません。" },
                    { eng: "I advise you to revise the document.", jpn: "文書を修正することをお勧めします。" }
                ]
            }
        ],
        expressions: [
            { eng: "Admittedly", jpn: "認めざルを得ないが" },
            { eng: "In addition", jpn: "さらに" },
            { eng: "On the other hand", jpn: "一方で" },
            { eng: "As a general rule", jpn: "一般規則として" },
            { eng: "Taking everything into account", jpn: "全てを勘案すると" }
        ]
    },
    {
        level: "B2",
        id: 49,
        title: "Lesson 49: Opinion Exchange - The Metaverse and the Future of Virtual Living",
        questions: [
            { eng: "1. Would you be willing to spend a significant portion of your day working or socializing in virtual reality?", jpn: "1. 1日の大部分をバーチャルリアリティでの仕事や交流に費やす意思はありますか？" },
            { eng: "2. How might the widespread adoption of the metaverse negatively impact our physical health?", jpn: "2. メタバースの普及は、私たちの身体的健康にどのような悪影響を及ぼす可能性がありますか？" },
            { eng: "3. Will digital real estate and virtual clothing eventually hold the same value as physical goods?", jpn: "3. デジタル不動産やバーチャルな衣服は、最終的に物理的な商品と同じ価値を持つようになるでしょうか？" },
            { eng: "4. Who should police criminal activity or harassment that occurs entirely within a virtual world?", jpn: "4. 完全に仮想世界内で発生する犯罪行為やハラスメントは、誰が取り締まるべきですか？" },
            { eng: "5. Do you think creating an idealized virtual avatar damages a person's real-world self-esteem?", jpn: "5. 理想化されたバーチャルアバターを作成することは、現実世界での個人の自尊心を傷つけると思いますか？" },
            { eng: "6. How can society prevent virtual reality escapism from becoming a widespread psychological addiction?", jpn: "6. 社会は、バーチャルリアリティへの現実逃避が広範な心理的依存症になるのをどのように防ぐことができますか？" },
            { eng: "7. Will the metaverse replace the need for physical travel and tourism in the future?", jpn: "7. メタバースは将来、物理的な旅行や観光の必要性に取って代わるでしょうか？" },
            { eng: "8. Should children be allowed unrestricted access to fully immersive virtual environments?", jpn: "8. 子供たちは完全に没入型の仮想環境への無制限のアクセスを許可されるべきですか？" },
            { eng: "9. How does corporate control of virtual spaces threaten our digital privacy and freedom of expression?", jpn: "9. 企業による仮想空間の支配は、私たちのデジタルプライバシーや表現の自由をどのように脅かしますか？" },
            { eng: "10. Ultimately, will the metaverse bring humanity closer together, or isolate us further in digital boxes?", jpn: "10. 最終的に、メタバースは人類をより親密に結びつけるでしょうか、それとも私たちをデジタルな箱の中にさらに孤立させるでしょうか？" }
        ],
        grammarPoints: [
            {
                point: "1. possessive: Indicating possession or association",
                explanation: "The structure noun + 'of ours' is used to indicate possession or association. This form is commonly used to refer to people, things, or entities connected to the speaker or their group, emphasizing familiarity or ownership.",
                explanationJpn: "構造「名詞 + 'of ours'」は、所有または関係を示すために使用されます。話者やそのグループに関連する人や物を指し、親しみや所有感を強調します。",
                examples: [
                    { eng: "A colleague of ours will join the meeting tomorrow.", jpn: "私たちの同僚が明日の会議に参加します。" },
                    { eng: "This idea of ours could really benefit the company.", jpn: "この私たちのアイデアは会社に大いに役立つかもしれません。" }
                ]
            },
            {
                point: "2. possessive: Showing ownership or association without repeating the noun",
                explanation: "Possessive pronouns such as 'mine,' 'yours,' 'his,' 'hers,' 'ours,' and 'theirs' can be used as objects to replace possessive noun phrases. This allows for a concise way to show ownership without repeating the noun.",
                explanationJpn: "「mine」「yours」「ours」などの所有代名詞は、所有名詞句の代わりに目的語として使用できます。名詞を繰り返さずに所有を簡潔に示す方法として使用されます。",
                examples: [
                    { eng: "I misplaced my pen, but she found hers.", jpn: "私はペンをなくしましたが、彼女は自分のものを見つけました。" },
                    { eng: "They forgot their tickets, but we remembered ours.", jpn: "彼らはチケットを忘れましたが、私たちは自分たちのものを覚えていました。" }
                ]
            }
        ],
        expressions: [
            { eng: "To be precise", jpn: "正確に言えば" },
            { eng: "What’s more", jpn: "さらに驚くべきことに" },
            { eng: "That being said", jpn: "そうは言っても" },
            { eng: "Broadly speaking", jpn: "大まかに言えば" },
            { eng: "To wrap it all up", jpn: "全体を締めくくると" }
        ]
    },
    {
        level: "B2",
        id: 50,
        title: "Lesson 50: Opinion Exchange - The Influence of Algorithms on Art and Music",
        questions: [
            { eng: "1. Do algorithmic recommendations on streaming platforms limit our exposure to diverse and challenging music?", jpn: "1. ストリーミングプラットフォーム上のアルゴリズムによる推奨は、多様で挑戦的な音楽に触れる機会を制限していますか？" },
            { eng: "2. Are modern musicians creating songs specifically tailored to please algorithms rather than human emotion?", jpn: "2. 現代のミュージシャンは、人間の感情よりもアルゴリズムを喜ばせるために特別に調整された曲を作っていますか？" },
            { eng: "3. How does the homogenization of popular culture affect the emergence of unique, local art movements?", jpn: "3. 大衆文化の均質化は、ユニークでローカルな芸術運動の出現にどのような影響を与えますか？" },
            { eng: "4. Should streaming platforms publicly disclose exactly how their content recommendation algorithms work?", jpn: "4. ストリーミングプラットフォームは、コンテンツの推奨アルゴリズムが正確にどのように機能するかを公に開示すべきですか？" },
            { eng: "5. Can an AI algorithm ever possess true 'artistic taste,' or does it only measure statistical engagement?", jpn: "5. AIアルゴリズムが真の「芸術的センス」を持つことは可能ですか、それとも単に統計的なエンゲージメントを測定しているだけですか？" },
            { eng: "6. How do algorithms unfairly disadvantage independent artists who lack large marketing budgets?", jpn: "6. アルゴリズムは、大規模なマーケティング予算を持たないインディーズアーティストをどのように不当に不利に扱っていますか？" },
            { eng: "7. Do you prefer finding new art manually through friends and record stores, or via digital algorithmic playlists?", jpn: "7. 友人やレコード店を通じて手動で新しいアートを見つけるのと、デジタルなアルゴリズムのプレイリストを通じて見つけるのでは、どちらが好きですか？" },
            { eng: "8. Will the future of commercial art be completely dictated by data analytics and machine learning trends?", jpn: "8. 商業芸術の未来は、データ分析と機械学習のトレンドによって完全に支配されるようになるでしょうか？" },
            { eng: "9. How does algorithmic bias prevent minority voices and niche genres from achieving mainstream success?", jpn: "9. アルゴリズムのバイアスは、マイノリティの声やニッチなジャンルがメインストリームで成功することをどのように妨げていますか？" },
            { eng: "10. If an algorithm determines what is 'good' based on views, does popularity officially become the only measure of quality?", jpn: "10. アルゴリズムが再生回数に基づいて何が「良い」かを決定する場合、人気は公式に品質の唯一の基準になりますか？" }
        ],
        grammarPoints: [
            {
                point: "1. Reflexive: Indicate Independence or Autonomy",
                explanation: "Using plural reflexive pronouns like 'by ourselves,' 'by yourselves,' and 'by themselves' indicates that a group of people or things is acting alone, independently, or without assistance. It emphasizes autonomy.",
                explanationJpn: "複数形の再帰代名詞（「by ourselves」「by themselves」）を使用することで、グループが自ら行動し、他の助けを借りずに独立していることを示します。自律性を強調します。",
                examples: [
                    { eng: "The students completed the project by themselves.", jpn: "生徒たちは自分たちでプロジェクトを完了しました。" },
                    { eng: "We organized the entire event by ourselves.", jpn: "私たちは自分たちでイベント全体を企画しました。" }
                ]
            },
            {
                point: "2. Reflexive: Indicate Non-human Independence or Autonomy",
                explanation: "The reflexive pronoun 'itself' combined with 'by' is used to express that a thing, object, or animal acts alone, without any external help or intervention. It implies that the action happens automatically.",
                explanationJpn: "再帰代名詞「itself」と「by」を組み合わせることで、物や動物が外部からの助けや介入なしに、独立して行動することを表現します。動作が自動的に起こることを示唆します。",
                examples: [
                    { eng: "The plant grew by itself without any special care.", jpn: "その植物は特別な手入れなしで自力で育ちました。" },
                    { eng: "The timer stopped by itself after the set time.", jpn: "設定された時間後にタイマーが自動で止まりました。" }
                ]
            }
        ],
        expressions: [
            { eng: "Fundamentally", jpn: "根本的に" },
            { eng: "In particular", jpn: "特に" },
            { eng: "By contrast", jpn: "対照的に" },
            { eng: "In the long run", jpn: "長期的に見て" },
            { eng: "At the end of the day", jpn: "結局のところ" }
        ]
    }
];