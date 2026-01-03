import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Terminal } from "lucide-react"

const terminalLines = [
  "$ python automation_pipeline.py --mode=monitor",
  "> Initializing data sync monitoring...",
  "> Processing 229 local government files...",
  "> CSV sanitization: 229 files processed",
  "> XML recovery pipeline: Active",
  "> Manual work reduced by 95%",
  "✓ All automations running",
]

export function AutomationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)

  useEffect(() => {
    if (!isInView) return

    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, terminalLines[currentLineIndex]])
        setCurrentLineIndex((prev) => prev + 1)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isInView, currentLineIndex])

  return (
    <section ref={ref} className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden">
            {/* Terminal header */}
            <div className="bg-slate-900/50 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-mono text-slate-400">automation-pipeline.sh</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
              {displayedLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={
                    line.startsWith("$")
                      ? "text-yellow-500"
                      : line.startsWith(">")
                        ? "text-slate-400"
                        : line.startsWith("✓")
                          ? "text-green-400"
                          : "text-slate-300"
                  }
                >
                  {line}
                </motion.div>
              ))}
              {currentLineIndex < terminalLines.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block w-2 h-4 bg-yellow-500 ml-1"
                />
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Manual Work Reduced", value: "95%" },
              { label: "Data Accuracy", value: "95%" },
              { label: "Time Saved", value: "30hrs/wk" },
              { label: "Local Governments Covered", value: "229" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700"
              >
                <div className="text-2xl font-bold text-yellow-500">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

