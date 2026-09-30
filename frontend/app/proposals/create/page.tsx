import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Icon } from "@/components/ui/Icon";

const editorTools = [
  "format_bold",
  "format_italic",
  "format_underlined",
  "format_list_bulleted",
  "format_list_numbered",
  "link",
];

export default function CreateProposalPage() {
  return (
    <AppShell activeLabel="Proposals">
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-10 md:py-10">
          <div className="mx-auto max-w-[1200px]">
            {/* Page heading */}
            <section className="mb-8">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Create New Proposal
              </h2>
              <p className="mt-2 text-base text-[#C4C7C8]">
                Submit a formal request for institutional change or resource
                allocation.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-16 flex max-w-2xl items-center gap-4">
              <div className="flex flex-1 items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#08090A]">
                  1
                </div>
                <span className="text-sm font-semibold text-white">
                  Information
                </span>
              </div>

              <div className="h-px flex-1 bg-[#444748]" />

              <div className="flex flex-1 items-center gap-3 opacity-50">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#444748] bg-[#343536] text-sm text-[#C4C7C8]">
                  2
                </div>
                <span className="text-sm text-[#C4C7C8]">Action</span>
              </div>

              <div className="h-px flex-1 bg-[#444748]" />

              <div className="flex flex-1 items-center gap-3 opacity-50">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#444748] bg-[#343536] text-sm text-[#C4C7C8]">
                  3
                </div>
                <span className="text-sm text-[#C4C7C8]">Review</span>
              </div>
            </section>

            {/* Form + guidelines */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
              <section className="rounded-xl border border-[#444748] bg-[#121315] p-8 lg:col-span-2">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C7C8]"
                    >
                      Proposal Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="e.g., Allocate 50K USDC to Research Lab"
                      className="w-full rounded-lg border border-[#444748] bg-[#08090A] px-4 py-3 text-base text-white outline-none placeholder:text-[#C4C7C8]/50 focus:border-white focus:ring-1 focus:ring-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="short-description"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C7C8]"
                    >
                      Short Description
                    </label>
                    <textarea
                      id="short-description"
                      name="shortDescription"
                      rows={2}
                      placeholder="A one-sentence summary of the proposal's goal."
                      className="w-full resize-none rounded-lg border border-[#444748] bg-[#08090A] px-4 py-3 text-base text-white outline-none placeholder:text-[#C4C7C8]/50 focus:border-white focus:ring-1 focus:ring-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="category"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C7C8]"
                    >
                      Category
                    </label>

                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        defaultValue=""
                        className="w-full appearance-none rounded-lg border border-[#444748] bg-[#08090A] px-4 py-3 text-base text-white outline-none focus:border-white focus:ring-1 focus:ring-white"
                      >
                        <option value="" disabled>
                          Select category...
                        </option>
                        <option value="treasury">
                          Treasury Allocation
                        </option>
                        <option value="policy">Policy Change</option>
                        <option value="grant">Grant Request</option>
                        <option value="meta">Meta Governance</option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                        <Icon className="text-[#C4C7C8]">
                          expand_more
                        </Icon>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <label
                      htmlFor="full-description"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C7C8]"
                    >
                      Full Description
                    </label>

                    <div className="overflow-hidden rounded-lg border border-[#444748] bg-[#08090A]">
                      <div className="flex items-center gap-2 border-b border-[#444748] bg-[#343536] p-2">
                        {editorTools.map((tool, index) => (
                          <div key={tool} className="flex items-center">
                            {index === 3 && (
                              <div className="mr-2 h-4 w-px bg-[#444748]" />
                            )}

                            <button
                              type="button"
                              aria-label={tool}
                              className="rounded p-1.5 text-[#C4C7C8] transition-colors hover:bg-[#121315] hover:text-white"
                            >
                              <Icon className="text-[18px]">{tool}</Icon>
                            </button>
                          </div>
                        ))}
                      </div>

                      <textarea
                        id="full-description"
                        name="description"
                        rows={8}
                        placeholder="Provide full context, rationale, and implementation details here..."
                        className="min-h-[200px] w-full resize-y border-none bg-transparent px-4 py-3 text-base text-white outline-none placeholder:text-[#C4C7C8]/50 focus:ring-0"
                      />
                    </div>
                  </div>
                </form>
              </section>

              {/* Guidelines */}
              <aside className="sticky top-24">
                <div className="rounded-xl border border-[#444748] bg-[#121315] p-4">
                  <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                    <Icon className="text-[18px]">info</Icon>
                    Governance Guidelines
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon className="mt-0.5 text-[16px] text-[#C4C7C8]">
                        check_circle
                      </Icon>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Clear Objectives
                        </h4>
                        <p className="mt-1 text-xs leading-4 text-[#C4C7C8]">
                          Ensure your title and summary clearly state the
                          requested action and desired outcome.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon className="mt-0.5 text-[16px] text-[#C4C7C8]">
                        account_balance
                      </Icon>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Budget Clarity
                        </h4>
                        <p className="mt-1 text-xs leading-4 text-[#C4C7C8]">
                          If requesting funds, provide an itemized breakdown in
                          the full description.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon className="mt-0.5 text-[16px] text-[#C4C7C8]">
                        schedule
                      </Icon>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Voting Timeline
                        </h4>
                        <p className="mt-1 text-xs leading-4 text-[#C4C7C8]">
                          Once submitted, proposals enter a 3-day review period
                          before formal voting begins.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 border-t border-[#444748] pt-4">
                    <a
                      href="#"
                      className="flex items-center gap-1 text-xs text-white hover:underline"
                    >
                      Read full constitution
                      <Icon className="text-[14px]">open_in_new</Icon>
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            {/* Actions */}
            <div className="mt-16 flex items-center justify-between border-t border-[#444748] pt-4">
              <Link
                href="/proposals"
                className="px-6 py-3 text-sm text-[#C4C7C8] hover:text-white"
              >
                Cancel
              </Link>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#08090A] transition-opacity hover:opacity-90 active:scale-[0.98]"
              >
                Next: Governance Action
                <Icon className="text-[18px]">arrow_forward</Icon>
              </button>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}