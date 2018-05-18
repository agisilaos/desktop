import * as React from 'react'

import { Branch } from '../../models/branch'

import { IBranchListItem } from './group-branches'
import { BranchListItem } from './branch-list-item'

export function renderDefaultBranch(
  item: IBranchListItem,
  matches: ReadonlyArray<number>,
  currentBranch: Branch | null,
  onCompareToBranch?: (branch: Branch) => void
): JSX.Element {
  const branch = item.branch
  const commit = branch.tip
  const currentBranchName = currentBranch ? currentBranch.name : null
  return (
    <BranchListItem
      branch={branch}
      isCurrentBranch={branch.name === currentBranchName}
      lastCommitDate={commit ? commit.author.date : null}
      matches={matches}
      onCompareToBranch={onCompareToBranch}
    />
  )
}
