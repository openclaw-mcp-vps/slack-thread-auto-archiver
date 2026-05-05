export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Slack Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-archive Slack threads<br />
          <span className="text-[#58a6ff]">after resolution</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Detects keywords like <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">resolved</code>, <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">done</code>, and <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">fixed</code> in your Slack channels and automatically archives threads — keeping your workspace clean without lifting a finger.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to connect. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="border-t border-[#21262d] bg-[#161b22]">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Real-time Detection</h3>
            <p className="text-sm text-[#8b949e]">Slack Events API webhooks process messages instantly as they arrive.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🔧</div>
            <h3 className="font-semibold text-white mb-1">Custom Keywords</h3>
            <p className="text-sm text-[#8b949e]">Configure your own trigger words beyond the defaults via the dashboard.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Archive Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Review all archived threads and restore any that were archived by mistake.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Slack workspaces",
              "Real-time keyword detection",
              "Custom keyword configuration",
              "Archive dashboard & restore",
              "Slack OAuth integration",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start for $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does the keyword detection work?</h3>
            <p className="text-[#8b949e] text-sm">We use the Slack Events API to receive message events in real time. When a message in a monitored channel contains a trigger keyword, the parent thread is automatically archived via the Slack API.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">Can I restore an accidentally archived thread?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The dashboard keeps a full log of every archived thread. You can restore any thread with one click, and it will reappear in the channel immediately.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Which Slack permissions are required?</h3>
            <p className="text-[#8b949e] text-sm">The app requests <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">channels:history</code>, <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">channels:read</code>, and <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">chat:write</code> scopes. No message content is stored — only thread metadata needed for archiving.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Slack Thread Auto-Archiver. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}
