import * as React from 'react'
import { Ref } from '../lib/ref'
import { Octicon, OcticonSymbol } from '../octicons'
import { Branch } from '../../models/branch'

interface INewCommitsBannerProps {
  /**
   * The number of commits behind base branch
   */
  readonly commitsBehindBaseBranch: number

  /**
   * The target branch that will accept commits
   * from the current branch
   */
  readonly baseBranch: Branch

  /**
   * Callback used to dismiss the banner
   */
  readonly onDismiss: () => void
}

/**
 * Banner used to notify user that their branch is a number of commits behind the base branch
 */
export class NewCommitsBanner extends React.Component<
  INewCommitsBannerProps,
  {}
> {
  public render() {
    const pluralize = this.props.commitsBehindBaseBranch > 1

    return (
      <div className="notification-banner diverge-banner">
        <Octicon
          symbol={OcticonSymbol.lightBulb}
          className="notification-icon"
        />

        <div className="notification-banner-content">
          <div>
            <p>
              We have noticed that your branch is{' '}
              <strong>
                {this.props.commitsBehindBaseBranch} commit{pluralize
                  ? 's'
                  : ''}
              </strong>{' '}
              behind <Ref>{this.props.baseBranch.name}</Ref>.
            </p>
          </div>
        </div>

        <a
          className="close"
          aria-label="Dismiss banner"
          onClick={this.props.onDismiss}
        >
          <Octicon symbol={OcticonSymbol.x} />
        </a>
      </div>
    )
  }
}
