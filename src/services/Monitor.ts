import * as Sentry from "@sentry/node";

const captureException = (error: unknown) => {
  Sentry.captureException(error);
};

const setUser = (user: { id: number; nit?: number | string | null }) => {
  Sentry.setUser(user);
};

const setContext = (key: string, context: Record<string, unknown>) => {
  Sentry.setContext(key, context);
};

const addBreadcrumb = (breadcrumb: {
  type?: string;
  category?: string;
  message?: string;
  level?: Sentry.SeverityLevel;
  data?: { [key: string]: any };
}) => {
  Sentry.addBreadcrumb(breadcrumb);
};

export const Monitor = {
  captureException,
  setUser,
  setContext,
  addBreadcrumb,
};
