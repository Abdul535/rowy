import { mapValues } from "lodash-es";
import meta from "@root/package.json";

export const EXTERNAL_LINKS = {
  homepage: meta.homepage,
  privacy: meta.homepage + "/privacy",
  terms: meta.homepage + "/terms",
  docs: meta.homepage.replace("//", "//docs."),

  gitHub: meta.repository.url.replace(".git", ""),
  discord: "https://discord.gg/B8yAD5PDX4",
  twitter: "https://twitter.com/rowyio",

  rowyRun: meta.repository.url.replace(".git", "Run"),
  rowyRunGitHub: meta.repository.url.replace(".git", "Run"),
  // prettier-ignore
  rowyRunDeploy: `https://deploy.cloud.run/?git_repo=${meta.repository.url.replace(".git", "Run")}.git`,

  rowyAppHostName: "rowy.app",

  dateFormat: "https://date-fns.org/v2.24.0/docs/format",
} as const;

const WIKI_PATHS = {
  setup: "/setup/install",
  setupFirebaseProject: "/setup/firebase-project",
  setupRoles: "/setup/roles",
  setupUpdate: "/setup/update",

  howToCreateTable: "/how-to/create-table",
  howToCreateColumn: "/how-to/create-column",
  howToAddRow: "/how-to/add-row",
  howToDefaultValues: "/how-to/default-values",
  howToCustomViews: "/how-to/custom-views",

  fieldTypesSupportedFields: "/field-types/supported-fields",
  fieldTypesDerivative: "/field-types/derivative",
  fieldTypesConnectTable: "/field-types/connect-table",
  fieldTypesConnector: "/field-types/connector",
  fieldTypesConnectService: "/field-types/connect-service",
  fieldTypesAction: "/field-types/action",
  fieldTypesAdd: "/field-types/add",

  rowyRun: "/rowy-run",

  extensions: "/extensions",
  extensionsDocSync: "/extensions/doc-sync",
  extensionsAlgoliaIndex: "/extensions/algolia-index",
  extensionsSlackMessage: "/extensions/slack-message",
  extensionsSendgridEmail: "/extensions/sendgrid-email",
  extensionsTwilioMessage: "/extensions/twilio-message",
  webhooks: "/webhooks",
};
export const WIKI_LINKS = mapValues(
  WIKI_PATHS,
  (path) => EXTERNAL_LINKS.docs + path
);

export const EMAIL_REQUEST = `mailto:hello@rowy.io?subject=Feature%20request%3A%20Webhooks%2FExtension%2FOther&body=**Please%20describe%20the%20problem%20you%20are%20trying%20to%20solve%3A**%0D%0A(Please%20provide%20as%20much%20information%20as%20you%20can%20to%20help%20us%20address%20faster)%0D%0A%0D%0A%0D%0A**Describe%20the%20solution%20you%E2%80%99d%20like%3A**%0D%0A%0D%0A%0D%0A**Optionally%2C%20describe%20how%20you%20currently%20solve%20this%20problem%20or%20any%20alternatives%20that%20you've%20considered%3A**%0D%0A%0D%0A%0D%0A**Optionally%2C%20additional%20context%3A**%0D%0A(Add%20any%20other%20context%2C%20screenshots%2C%20or%20screen%20recordings)%0D%0A%0D%0A`;
