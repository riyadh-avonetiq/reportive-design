// Reportive — SEO & Organic (Search Console + GA4) screen

const ScreenSEO = () => (
  <div style={{ display: 'flex', height: '100%', background: 'var(--navy-base)', fontFamily: 'var(--font-body)', position: 'relative' }}>
    <RSidebar active="seo"/>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <RFlare intensity={0.2}/>
      <RTopBar title="SEO & Organic" subtitle="Search Console + GA4 organic traffic" period="Mar 2025"/>
      <div style={{ flex: 1, overflow: 'auto', padding: 24, position: 'relative', zIndex: 1 }}>

        {/* Authority score hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 12, marginBottom: 20 }}>
          <RCard padding={20} style={{ borderTop: '2px solid var(--avo-teal)', background: 'linear-gradient(145deg,rgba(12,24,44,.8),rgba(0,194,184,.05))' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Authority Score</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 54, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--avo-teal)', lineHeight: 1 }}>84,7</div>
              <div><RDelta value={4.2} suffix=" pts"/></div>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.5 }}>Domain authority tumbuh konsisten 4 bulan terakhir. Backlinks berkualitas dari media tier-1 (Kompas, Tempo, Detik).</div>
            <div style={{ display: 'flex', gap: 14, marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--navy-edge)' }}>
              {[['Keywords', '2.480'], ['Backlinks', '14.7K'], ['Ref. domains', '342']].map(([l,v]) => (
                <div key={l} style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#FCFCFC', marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
          </RCard>
          <RCard padding={18}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#FCFCFC' }}>Organic sessions · 12-month trend</div>
              <div style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-secondary)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 2, background: 'var(--avo-teal)' }}/>Sessions</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 2, background: 'var(--gold-base)' }}/>Clicks</span>
              </div>
            </div>
            <svg viewBox="0 0 500 160" style={{ width: '100%' }}>
              <defs>
                <linearGradient id="tealG2" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#00C2B8" stopOpacity="0.35"/><stop offset="100%" stopColor="#00C2B8" stopOpacity="0"/></linearGradient>
              </defs>
              {[30,70,110,150].map(y => <line key={y} x1="30" x2="500" y1={y} y2={y} stroke="#334766" strokeDasharray="2,3" strokeWidth="0.5"/>)}
              {['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'].map((m,i) => <text key={m} x={30+i*40} y="158" fontFamily="DM Mono" fontSize="8.5" fill="#64748B" textAnchor="middle">{m}</text>)}
              <path d="M30 120 L70 115 L110 100 L150 105 L190 90 L230 85 L270 80 L310 70 L350 65 L390 55 L430 50 L470 40 L470 160 L30 160 Z" fill="url(#tealG2)"/>
              <path d="M30 120 L70 115 L110 100 L150 105 L190 90 L230 85 L270 80 L310 70 L350 65 L390 55 L430 50 L470 40" fill="none" stroke="#00C2B8" strokeWidth="2.2"/>
              <path d="M30 135 L70 130 L110 125 L150 120 L190 115 L230 110 L270 105 L310 95 L350 90 L390 82 L430 75 L470 68" fill="none" stroke="#F8B400" strokeWidth="2" strokeDasharray="3,2"/>
            </svg>
          </RCard>
        </div>

        {/* Two-column: Queries table + pages */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          <RCard padding={0} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--navy-edge)', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 13.5, fontWeight: 700, color: '#FCFCFC' }}>Top Queries</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)' }}>Search Console · last 28 days</div>
              </div>
              <ChannelLogo channel="search" size={20}/>
            </div>
            {[
              ['kopi specialty jakarta', '8.240', '342', '4,15%', '2,1', 'up'],
              ['roaster arabika', '5.120', '198', '3,87%', '3,4', 'up'],
              ['biji kopi senja', '4.680', '220', '4,70%', '1,8', 'up'],
              ['cold brew delivery', '3.240', '92', '2,84%', '5,2', 'down'],
              ['specialty coffee bean', '2.890', '78', '2,70%', '6,1', 'flat'],
              ['house of senja menu', '2.120', '156', '7,36%', '1,2', 'up'],
            ].map((r,i) => (
              <div key={i} style={{ padding: '9px 18px', borderTop: '1px solid rgba(51,71,102,.4)', display: 'grid', gridTemplateColumns: '1.8fr 60px 50px 55px 40px 14px', gap: 8, alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: '#FCFCFC' }}>{r[0]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-secondary)', textAlign: 'right' }}>{r[1]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-secondary)', textAlign: 'right' }}>{r[2]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: '#FCFCFC', textAlign: 'right' }}>{r[3]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--avo-teal)', textAlign: 'right' }}>{r[4]}</span>
                <span style={{ textAlign: 'right', fontFamily: 'DM Mono', fontSize: 10, color: r[5]==='up'?'#16A34A':r[5]==='down'?'#DC2626':'#64748B' }}>{r[5]==='up'?'▲':r[5]==='down'?'▼':'▬'}</span>
              </div>
            ))}
            <div style={{ padding: '8px 18px', borderTop: '1px solid var(--navy-edge)', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', textAlign: 'right' }}>6 of 2.480 keywords</div>
          </RCard>

          <RCard padding={0} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--navy-edge)', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 13.5, fontWeight: 700, color: '#FCFCFC' }}>Landing Pages</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)' }}>GA4 · organic entries</div>
              </div>
              <ChannelLogo channel="ga4" size={20}/>
            </div>
            {[
              ['/blog/panduan-kopi-specialty', '6.430', '2:14', '34%', 92],
              ['/produk/bold-brew-blend', '4.180', '3:42', '22%', 88],
              ['/', '3.920', '1:08', '58%', 65],
              ['/blog/cara-seduh-v60', '2.890', '4:02', '18%', 90],
              ['/tentang-kami', '1.740', '0:48', '71%', 42],
              ['/outlet', '1.240', '2:36', '28%', 76],
            ].map((r,i) => (
              <div key={i} style={{ padding: '9px 18px', borderTop: '1px solid rgba(51,71,102,.4)', display: 'grid', gridTemplateColumns: '1.8fr 55px 55px 45px 50px', gap: 8, alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: '#FCFCFC', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r[0]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-secondary)', textAlign: 'right' }}>{r[1]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-secondary)', textAlign: 'right' }}>{r[2]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: r[3].startsWith('7')||r[3].startsWith('5')?'#F8B400':'var(--text-secondary)', textAlign: 'right' }}>{r[3]}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 28, height: 4, background: 'var(--navy-deep)', borderRadius: 2, overflow: 'hidden' }}><div style={{ width: r[4]+'%', height: '100%', background: r[4]>=80?'#16A34A':r[4]>=60?'#F8B400':'#DC2626' }}/></div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#FCFCFC' }}>{r[4]}</span>
                  </div>
                </div>
              </div>
            ))}
          </RCard>
        </div>

        {/* Device + country breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.4fr', gap: 12 }}>
          <RCard padding={16}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#FCFCFC', marginBottom: 12 }}>Device split</div>
            {[['Mobile', 72, '#00C2B8'], ['Desktop', 22, '#F8B400'], ['Tablet', 6, '#7000FF']].map(([l,v,c]) => (
              <div key={l} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 11.5, marginBottom: 4 }}><span style={{ color: '#FCFCFC' }}>{l}</span><span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{v}%</span></div>
                <div style={{ height: 4, background: 'var(--navy-deep)', borderRadius: 2, overflow: 'hidden' }}><div style={{ width: v+'%', height: '100%', background: c }}/></div>
              </div>
            ))}
          </RCard>
          <RCard padding={16}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#FCFCFC', marginBottom: 12 }}>Top countries</div>
            {[['🇮🇩 Indonesia', 94, '23.340'], ['🇸🇬 Singapore', 3, '742'], ['🇲🇾 Malaysia', 2, '498'], ['🇺🇸 United States', 1, '250']].map(([l,v,n]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0' }}>
                <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 11.5, color: '#FCFCFC' }}>{l}</span>
                <div style={{ width: 60, height: 3, background: 'var(--navy-deep)', borderRadius: 2, overflow: 'hidden' }}><div style={{ width: v+'%', height: '100%', background: 'var(--avo-teal)' }}/></div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-secondary)', width: 44, textAlign: 'right' }}>{n}</span>
              </div>
            ))}
          </RCard>
          <RCard padding={16} style={{ background: 'linear-gradient(135deg,rgba(0,194,184,.04),rgba(248,180,0,.02))' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 22, height: 22, background: 'rgba(248,180,0,.14)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" fill="none" stroke="#F8B400" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.35 7.24h7.61l-6.16 4.47 2.35 7.24L12 16.48l-6.16 4.47 2.35-7.24L2.04 9.24h7.61z"/></svg>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-base)' }}>SEO opportunity</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#FCFCFC', marginBottom: 4 }}>3 halaman di posisi #4-#7 berpotensi naik ke top-3</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>"Panduan Kopi Specialty" (#4), "V60 Brewing" (#5), dan "Bold Brew" (#7) dapat diangkat dengan internal linking + 2 backlink berkualitas. Estimasi +3.200 sessions/bulan.</p>
            <button style={{ marginTop: 10, padding: '7px 12px', background: 'linear-gradient(135deg,#F8B400,#FFCA3A)', color: '#0C182C', border: 'none', borderRadius: 8, fontFamily: 'var(--font-display)', fontSize: 11.5, fontWeight: 700, cursor: 'pointer' }}>Create action plan →</button>
          </RCard>
        </div>

      </div>
    </div>
  </div>
);

Object.assign(window, { ScreenSEO });
