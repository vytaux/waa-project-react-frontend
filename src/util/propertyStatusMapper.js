const statusBadgeClassColourProvider = (status) => {
  const statusToColourClassMap = {
    STATUS_AVAILABLE: "available",
    STATUS_PENDING: "pending",
    STATUS_CONTINGENT: "contingent",
  };

  return statusToColourClassMap[status];
};

export default statusBadgeClassColourProvider;
