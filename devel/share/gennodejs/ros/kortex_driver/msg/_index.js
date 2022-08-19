
"use strict";

let ApiOptions = require('./ApiOptions.js');
let KortexError = require('./KortexError.js');
let SubErrorCodes = require('./SubErrorCodes.js');
let ErrorCodes = require('./ErrorCodes.js');
let ControlLoop = require('./ControlLoop.js');
let AxisOffsets = require('./AxisOffsets.js');
let CoggingFeedforwardMode = require('./CoggingFeedforwardMode.js');
let CoggingFeedforwardModeInformation = require('./CoggingFeedforwardModeInformation.js');
let TorqueCalibration = require('./TorqueCalibration.js');
let RampResponse = require('./RampResponse.js');
let ActuatorConfig_ControlMode = require('./ActuatorConfig_ControlMode.js');
let ActuatorConfig_ServiceVersion = require('./ActuatorConfig_ServiceVersion.js');
let ControlLoopParameters = require('./ControlLoopParameters.js');
let AxisPosition = require('./AxisPosition.js');
let PositionCommand = require('./PositionCommand.js');
let ControlLoopSelection = require('./ControlLoopSelection.js');
let Servoing = require('./Servoing.js');
let ActuatorConfig_ControlModeInformation = require('./ActuatorConfig_ControlModeInformation.js');
let EncoderDerivativeParameters = require('./EncoderDerivativeParameters.js');
let CustomDataSelection = require('./CustomDataSelection.js');
let LoopSelection = require('./LoopSelection.js');
let StepResponse = require('./StepResponse.js');
let FrequencyResponse = require('./FrequencyResponse.js');
let VectorDriveParameters = require('./VectorDriveParameters.js');
let SafetyIdentifierBankA = require('./SafetyIdentifierBankA.js');
let CustomDataIndex = require('./CustomDataIndex.js');
let CommandModeInformation = require('./CommandModeInformation.js');
let CommandMode = require('./CommandMode.js');
let TorqueOffset = require('./TorqueOffset.js');
let ActuatorConfig_SafetyLimitType = require('./ActuatorConfig_SafetyLimitType.js');
let ActuatorCyclic_MessageId = require('./ActuatorCyclic_MessageId.js');
let ActuatorCyclic_Command = require('./ActuatorCyclic_Command.js');
let ActuatorCyclic_ServiceVersion = require('./ActuatorCyclic_ServiceVersion.js');
let ActuatorCyclic_CustomData = require('./ActuatorCyclic_CustomData.js');
let StatusFlags = require('./StatusFlags.js');
let CommandFlags = require('./CommandFlags.js');
let ActuatorCyclic_Feedback = require('./ActuatorCyclic_Feedback.js');
let Query = require('./Query.js');
let ShapeType = require('./ShapeType.js');
let Base_ServiceVersion = require('./Base_ServiceVersion.js');
let MappingInfoNotification = require('./MappingInfoNotification.js');
let AngularWaypoint = require('./AngularWaypoint.js');
let ArmStateNotification = require('./ArmStateNotification.js');
let FactoryNotification = require('./FactoryNotification.js');
let OperatingModeInformation = require('./OperatingModeInformation.js');
let FullUserProfile = require('./FullUserProfile.js');
let Xbox360DigitalInputIdentifier = require('./Xbox360DigitalInputIdentifier.js');
let SequenceTask = require('./SequenceTask.js');
let ProtectionZoneNotificationList = require('./ProtectionZoneNotificationList.js');
let WrenchMode = require('./WrenchMode.js');
let GripperMode = require('./GripperMode.js');
let ControllerList = require('./ControllerList.js');
let SequenceTasks = require('./SequenceTasks.js');
let UserNotificationList = require('./UserNotificationList.js');
let Gen3GpioPinId = require('./Gen3GpioPinId.js');
let Faults = require('./Faults.js');
let ZoneShape = require('./ZoneShape.js');
let ControllerConfigurationList = require('./ControllerConfigurationList.js');
let JointAngle = require('./JointAngle.js');
let ConfigurationChangeNotificationList = require('./ConfigurationChangeNotificationList.js');
let IPv4Configuration = require('./IPv4Configuration.js');
let WristDigitalInputIdentifier = require('./WristDigitalInputIdentifier.js');
let RobotEventNotification = require('./RobotEventNotification.js');
let SequenceTasksPair = require('./SequenceTasksPair.js');
let ControllerBehavior = require('./ControllerBehavior.js');
let BridgeIdentifier = require('./BridgeIdentifier.js');
let CartesianLimitation = require('./CartesianLimitation.js');
let ActuatorInformation = require('./ActuatorInformation.js');
let SnapshotType = require('./SnapshotType.js');
let ActionNotification = require('./ActionNotification.js');
let SequenceInfoNotification = require('./SequenceInfoNotification.js');
let EventIdSequenceInfoNotification = require('./EventIdSequenceInfoNotification.js');
let GpioCommand = require('./GpioCommand.js');
let ProtectionZoneInformation = require('./ProtectionZoneInformation.js');
let WrenchCommand = require('./WrenchCommand.js');
let Base_RotationMatrixRow = require('./Base_RotationMatrixRow.js');
let ControllerInputType = require('./ControllerInputType.js');
let Base_ControlMode = require('./Base_ControlMode.js');
let Action = require('./Action.js');
let ProtectionZone = require('./ProtectionZone.js');
let SequenceTasksConfiguration = require('./SequenceTasksConfiguration.js');
let GpioPinPropertyFlags = require('./GpioPinPropertyFlags.js');
let ActionList = require('./ActionList.js');
let PreComputedJointTrajectoryElement = require('./PreComputedJointTrajectoryElement.js');
let SystemTime = require('./SystemTime.js');
let EmergencyStop = require('./EmergencyStop.js');
let ConstrainedJointAngles = require('./ConstrainedJointAngles.js');
let WifiInformation = require('./WifiInformation.js');
let ControllerNotification_state = require('./ControllerNotification_state.js');
let Base_Position = require('./Base_Position.js');
let Gripper = require('./Gripper.js');
let ActionHandle = require('./ActionHandle.js');
let SwitchControlMapping = require('./SwitchControlMapping.js');
let Twist = require('./Twist.js');
let ServoingModeNotificationList = require('./ServoingModeNotificationList.js');
let WaypointValidationReport = require('./WaypointValidationReport.js');
let ControllerNotification = require('./ControllerNotification.js');
let Base_ControlModeNotification = require('./Base_ControlModeNotification.js');
let MapGroupList = require('./MapGroupList.js');
let ConstrainedOrientation = require('./ConstrainedOrientation.js');
let TrajectoryInfoType = require('./TrajectoryInfoType.js');
let LedState = require('./LedState.js');
let NetworkNotificationList = require('./NetworkNotificationList.js');
let GripperRequest = require('./GripperRequest.js');
let BridgeResult = require('./BridgeResult.js');
let NetworkHandle = require('./NetworkHandle.js');
let OperatingModeNotification = require('./OperatingModeNotification.js');
let JointTrajectoryConstraintType = require('./JointTrajectoryConstraintType.js');
let SequenceInformation = require('./SequenceInformation.js');
let RobotEvent = require('./RobotEvent.js');
let LimitationType = require('./LimitationType.js');
let JointSpeed = require('./JointSpeed.js');
let TrajectoryContinuityMode = require('./TrajectoryContinuityMode.js');
let TwistLimitation = require('./TwistLimitation.js');
let Snapshot = require('./Snapshot.js');
let NetworkNotification = require('./NetworkNotification.js');
let TransformationRow = require('./TransformationRow.js');
let ActionEvent = require('./ActionEvent.js');
let ControllerState = require('./ControllerState.js');
let JointNavigationDirection = require('./JointNavigationDirection.js');
let Wrench = require('./Wrench.js');
let IPv4Information = require('./IPv4Information.js');
let GpioAction = require('./GpioAction.js');
let Pose = require('./Pose.js');
let TwistCommand = require('./TwistCommand.js');
let MapElement = require('./MapElement.js');
let SequenceInfoNotificationList = require('./SequenceInfoNotificationList.js');
let Admittance = require('./Admittance.js');
let ServoingModeNotification = require('./ServoingModeNotification.js');
let Delay = require('./Delay.js');
let Timeout = require('./Timeout.js');
let JointTorques = require('./JointTorques.js');
let ActionExecutionState = require('./ActionExecutionState.js');
let ProtectionZoneHandle = require('./ProtectionZoneHandle.js');
let FirmwareBundleVersions = require('./FirmwareBundleVersions.js');
let Base_CapSenseConfig = require('./Base_CapSenseConfig.js');
let ActionNotificationList = require('./ActionNotificationList.js');
let PreComputedJointTrajectory = require('./PreComputedJointTrajectory.js');
let JointTorque = require('./JointTorque.js');
let ControllerConfigurationMode = require('./ControllerConfigurationMode.js');
let NavigationDirection = require('./NavigationDirection.js');
let Waypoint_type_of_waypoint = require('./Waypoint_type_of_waypoint.js');
let WifiSecurityType = require('./WifiSecurityType.js');
let TrajectoryErrorType = require('./TrajectoryErrorType.js');
let WifiConfigurationList = require('./WifiConfigurationList.js');
let WrenchLimitation = require('./WrenchLimitation.js');
let TrajectoryErrorElement = require('./TrajectoryErrorElement.js');
let UserList = require('./UserList.js');
let JointTrajectoryConstraint = require('./JointTrajectoryConstraint.js');
let MappingInfoNotificationList = require('./MappingInfoNotificationList.js');
let PasswordChange = require('./PasswordChange.js');
let WifiConfiguration = require('./WifiConfiguration.js');
let SequenceList = require('./SequenceList.js');
let AdmittanceMode = require('./AdmittanceMode.js');
let TransformationMatrix = require('./TransformationMatrix.js');
let WifiInformationList = require('./WifiInformationList.js');
let ServoingModeInformation = require('./ServoingModeInformation.js');
let ChangeJointSpeeds = require('./ChangeJointSpeeds.js');
let CartesianSpeed = require('./CartesianSpeed.js');
let ConfigurationChangeNotification_configuration_change = require('./ConfigurationChangeNotification_configuration_change.js');
let OperatingMode = require('./OperatingMode.js');
let AdvancedSequenceHandle = require('./AdvancedSequenceHandle.js');
let ProtectionZoneList = require('./ProtectionZoneList.js');
let SoundType = require('./SoundType.js');
let ControllerElementEventType = require('./ControllerElementEventType.js');
let Base_Stop = require('./Base_Stop.js');
let Orientation = require('./Orientation.js');
let SafetyNotificationList = require('./SafetyNotificationList.js');
let NetworkType = require('./NetworkType.js');
let BridgePortConfig = require('./BridgePortConfig.js');
let GripperCommand = require('./GripperCommand.js');
let CartesianTrajectoryConstraint_type = require('./CartesianTrajectoryConstraint_type.js');
let ControllerType = require('./ControllerType.js');
let FirmwareComponentVersion = require('./FirmwareComponentVersion.js');
let MapEvent_events = require('./MapEvent_events.js');
let ControllerConfiguration = require('./ControllerConfiguration.js');
let WifiEncryptionType = require('./WifiEncryptionType.js');
let ConstrainedPose = require('./ConstrainedPose.js');
let Base_SafetyIdentifier = require('./Base_SafetyIdentifier.js');
let Mapping = require('./Mapping.js');
let UserProfileList = require('./UserProfileList.js');
let Finger = require('./Finger.js');
let KinematicTrajectoryConstraints = require('./KinematicTrajectoryConstraints.js');
let JointAngles = require('./JointAngles.js');
let JointsLimitationsList = require('./JointsLimitationsList.js');
let MapEvent = require('./MapEvent.js');
let Base_JointSpeeds = require('./Base_JointSpeeds.js');
let Waypoint = require('./Waypoint.js');
let FactoryEvent = require('./FactoryEvent.js');
let BridgeType = require('./BridgeType.js');
let BridgeConfig = require('./BridgeConfig.js');
let ActionType = require('./ActionType.js');
let MappingHandle = require('./MappingHandle.js');
let UserProfile = require('./UserProfile.js');
let TrajectoryErrorIdentifier = require('./TrajectoryErrorIdentifier.js');
let JointLimitation = require('./JointLimitation.js');
let MappingList = require('./MappingList.js');
let SequenceTaskConfiguration = require('./SequenceTaskConfiguration.js');
let Base_ControlModeInformation = require('./Base_ControlModeInformation.js');
let Xbox360AnalogInputIdentifier = require('./Xbox360AnalogInputIdentifier.js');
let MapList = require('./MapList.js');
let OperatingModeNotificationList = require('./OperatingModeNotificationList.js');
let Ssid = require('./Ssid.js');
let MapGroup = require('./MapGroup.js');
let ControllerElementState = require('./ControllerElementState.js');
let BridgeList = require('./BridgeList.js');
let SignalQuality = require('./SignalQuality.js');
let Base_GpioConfiguration = require('./Base_GpioConfiguration.js');
let ProtectionZoneNotification = require('./ProtectionZoneNotification.js');
let Sequence = require('./Sequence.js');
let RobotEventNotificationList = require('./RobotEventNotificationList.js');
let UserNotification = require('./UserNotification.js');
let ArmStateInformation = require('./ArmStateInformation.js');
let MapHandle = require('./MapHandle.js');
let ControllerNotificationList = require('./ControllerNotificationList.js');
let BridgeStatus = require('./BridgeStatus.js');
let FullIPv4Configuration = require('./FullIPv4Configuration.js');
let SafetyEvent = require('./SafetyEvent.js');
let BackupEvent = require('./BackupEvent.js');
let TrajectoryErrorReport = require('./TrajectoryErrorReport.js');
let CommunicationInterfaceConfiguration = require('./CommunicationInterfaceConfiguration.js');
let IKData = require('./IKData.js');
let GpioPinConfiguration = require('./GpioPinConfiguration.js');
let ConstrainedJointAngle = require('./ConstrainedJointAngle.js');
let Action_action_parameters = require('./Action_action_parameters.js');
let WaypointList = require('./WaypointList.js');
let ControllerEvent = require('./ControllerEvent.js');
let CartesianLimitationList = require('./CartesianLimitationList.js');
let SequenceHandle = require('./SequenceHandle.js');
let ConfigurationChangeNotification = require('./ConfigurationChangeNotification.js');
let Base_RotationMatrix = require('./Base_RotationMatrix.js');
let ProtectionZoneEvent = require('./ProtectionZoneEvent.js');
let ActivateMapHandle = require('./ActivateMapHandle.js');
let ControllerEventType = require('./ControllerEventType.js');
let SequenceTaskHandle = require('./SequenceTaskHandle.js');
let ControlModeNotificationList = require('./ControlModeNotificationList.js');
let ServoingMode = require('./ServoingMode.js');
let GpioBehavior = require('./GpioBehavior.js');
let ControllerElementHandle_identifier = require('./ControllerElementHandle_identifier.js');
let TrajectoryInfo = require('./TrajectoryInfo.js');
let MapGroupHandle = require('./MapGroupHandle.js');
let ChangeTwist = require('./ChangeTwist.js');
let ConstrainedPosition = require('./ConstrainedPosition.js');
let ConfigurationNotificationEvent = require('./ConfigurationNotificationEvent.js');
let GpioEvent = require('./GpioEvent.js');
let RequestedActionType = require('./RequestedActionType.js');
let CartesianTrajectoryConstraint = require('./CartesianTrajectoryConstraint.js');
let GpioConfigurationList = require('./GpioConfigurationList.js');
let UserEvent = require('./UserEvent.js');
let SequenceTasksRange = require('./SequenceTasksRange.js');
let NetworkEvent = require('./NetworkEvent.js');
let ChangeWrench = require('./ChangeWrench.js');
let Map = require('./Map.js');
let Base_CapSenseMode = require('./Base_CapSenseMode.js');
let AppendActionInformation = require('./AppendActionInformation.js');
let CartesianWaypoint = require('./CartesianWaypoint.js');
let ControllerElementHandle = require('./ControllerElementHandle.js');
let ControllerHandle = require('./ControllerHandle.js');
let Point = require('./Point.js');
let ActuatorCommand = require('./ActuatorCommand.js');
let ActuatorFeedback = require('./ActuatorFeedback.js');
let BaseCyclic_Feedback = require('./BaseCyclic_Feedback.js');
let ActuatorCustomData = require('./ActuatorCustomData.js');
let BaseCyclic_Command = require('./BaseCyclic_Command.js');
let BaseCyclic_CustomData = require('./BaseCyclic_CustomData.js');
let BaseCyclic_ServiceVersion = require('./BaseCyclic_ServiceVersion.js');
let BaseFeedback = require('./BaseFeedback.js');
let UserProfileHandle = require('./UserProfileHandle.js');
let CartesianReferenceFrame = require('./CartesianReferenceFrame.js');
let CountryCode = require('./CountryCode.js');
let UARTConfiguration = require('./UARTConfiguration.js');
let DeviceHandle = require('./DeviceHandle.js');
let UARTParity = require('./UARTParity.js');
let Permission = require('./Permission.js');
let CountryCodeIdentifier = require('./CountryCodeIdentifier.js');
let UARTSpeed = require('./UARTSpeed.js');
let UARTWordLength = require('./UARTWordLength.js');
let DeviceTypes = require('./DeviceTypes.js');
let Empty = require('./Empty.js');
let SafetyStatusValue = require('./SafetyStatusValue.js');
let Unit = require('./Unit.js');
let ArmState = require('./ArmState.js');
let Connection = require('./Connection.js');
let UARTDeviceIdentification = require('./UARTDeviceIdentification.js');
let UARTStopBits = require('./UARTStopBits.js');
let SafetyHandle = require('./SafetyHandle.js');
let NotificationHandle = require('./NotificationHandle.js');
let Timestamp = require('./Timestamp.js');
let NotificationType = require('./NotificationType.js');
let SafetyNotification = require('./SafetyNotification.js');
let NotificationOptions = require('./NotificationOptions.js');
let KinematicLimitsList = require('./KinematicLimitsList.js');
let JointSpeedSoftLimits = require('./JointSpeedSoftLimits.js');
let ControlConfigurationEvent = require('./ControlConfigurationEvent.js');
let ControlConfig_Position = require('./ControlConfig_Position.js');
let ControlConfigurationNotification = require('./ControlConfigurationNotification.js');
let ControlConfig_ControlModeInformation = require('./ControlConfig_ControlModeInformation.js');
let ControlConfig_ControlModeNotification = require('./ControlConfig_ControlModeNotification.js');
let TwistLinearSoftLimit = require('./TwistLinearSoftLimit.js');
let ControlConfig_JointSpeeds = require('./ControlConfig_JointSpeeds.js');
let ToolConfiguration = require('./ToolConfiguration.js');
let CartesianReferenceFrameInfo = require('./CartesianReferenceFrameInfo.js');
let LinearTwist = require('./LinearTwist.js');
let TwistAngularSoftLimit = require('./TwistAngularSoftLimit.js');
let AngularTwist = require('./AngularTwist.js');
let DesiredSpeeds = require('./DesiredSpeeds.js');
let CartesianTransform = require('./CartesianTransform.js');
let ControlConfig_ServiceVersion = require('./ControlConfig_ServiceVersion.js');
let GravityVector = require('./GravityVector.js');
let ControlConfig_ControlMode = require('./ControlConfig_ControlMode.js');
let JointAccelerationSoftLimits = require('./JointAccelerationSoftLimits.js');
let KinematicLimits = require('./KinematicLimits.js');
let PayloadInformation = require('./PayloadInformation.js');
let DeviceConfig_CapSenseConfig = require('./DeviceConfig_CapSenseConfig.js');
let RebootRqst = require('./RebootRqst.js');
let RunModes = require('./RunModes.js');
let CalibrationElement = require('./CalibrationElement.js');
let CalibrationParameter = require('./CalibrationParameter.js');
let MACAddress = require('./MACAddress.js');
let SafetyInformation = require('./SafetyInformation.js');
let Calibration = require('./Calibration.js');
let CalibrationItem = require('./CalibrationItem.js');
let PartNumberRevision = require('./PartNumberRevision.js');
let DeviceType = require('./DeviceType.js');
let CalibrationResult = require('./CalibrationResult.js');
let SafetyStatus = require('./SafetyStatus.js');
let CapSenseRegister = require('./CapSenseRegister.js');
let ModelNumber = require('./ModelNumber.js');
let RunMode = require('./RunMode.js');
let SafetyConfigurationList = require('./SafetyConfigurationList.js');
let CalibrationParameter_value = require('./CalibrationParameter_value.js');
let SafetyThreshold = require('./SafetyThreshold.js');
let BootloaderVersion = require('./BootloaderVersion.js');
let PartNumber = require('./PartNumber.js');
let SafetyEnable = require('./SafetyEnable.js');
let SafetyConfiguration = require('./SafetyConfiguration.js');
let CalibrationStatus = require('./CalibrationStatus.js');
let DeviceConfig_CapSenseMode = require('./DeviceConfig_CapSenseMode.js');
let PowerOnSelfTestResult = require('./PowerOnSelfTestResult.js');
let SafetyInformationList = require('./SafetyInformationList.js');
let IPv4Settings = require('./IPv4Settings.js');
let FirmwareVersion = require('./FirmwareVersion.js');
let SerialNumber = require('./SerialNumber.js');
let DeviceConfig_SafetyLimitType = require('./DeviceConfig_SafetyLimitType.js');
let DeviceConfig_ServiceVersion = require('./DeviceConfig_ServiceVersion.js');
let DeviceHandles = require('./DeviceHandles.js');
let DeviceManager_ServiceVersion = require('./DeviceManager_ServiceVersion.js');
let GripperConfig_SafetyIdentifier = require('./GripperConfig_SafetyIdentifier.js');
let RobotiqGripperStatusFlags = require('./RobotiqGripperStatusFlags.js');
let GripperCyclic_CustomData = require('./GripperCyclic_CustomData.js');
let MotorCommand = require('./MotorCommand.js');
let CustomDataUnit = require('./CustomDataUnit.js');
let GripperCyclic_Feedback = require('./GripperCyclic_Feedback.js');
let MotorFeedback = require('./MotorFeedback.js');
let GripperCyclic_ServiceVersion = require('./GripperCyclic_ServiceVersion.js');
let GripperCyclic_Command = require('./GripperCyclic_Command.js');
let GripperCyclic_MessageId = require('./GripperCyclic_MessageId.js');
let InterconnectConfig_SafetyIdentifier = require('./InterconnectConfig_SafetyIdentifier.js');
let InterconnectConfig_GPIOConfiguration = require('./InterconnectConfig_GPIOConfiguration.js');
let I2CMode = require('./I2CMode.js');
let I2CWriteRegisterParameter = require('./I2CWriteRegisterParameter.js');
let I2CData = require('./I2CData.js');
let EthernetSpeed = require('./EthernetSpeed.js');
let I2CReadRegisterParameter = require('./I2CReadRegisterParameter.js');
let EthernetDeviceIdentification = require('./EthernetDeviceIdentification.js');
let I2CDeviceAddressing = require('./I2CDeviceAddressing.js');
let InterconnectConfig_ServiceVersion = require('./InterconnectConfig_ServiceVersion.js');
let I2CWriteParameter = require('./I2CWriteParameter.js');
let UARTPortId = require('./UARTPortId.js');
let I2CReadParameter = require('./I2CReadParameter.js');
let GPIOMode = require('./GPIOMode.js');
let GPIOIdentification = require('./GPIOIdentification.js');
let GPIOState = require('./GPIOState.js');
let EthernetDuplex = require('./EthernetDuplex.js');
let I2CConfiguration = require('./I2CConfiguration.js');
let EthernetConfiguration = require('./EthernetConfiguration.js');
let I2CRegisterAddressSize = require('./I2CRegisterAddressSize.js');
let EthernetDevice = require('./EthernetDevice.js');
let GPIOValue = require('./GPIOValue.js');
let I2CDevice = require('./I2CDevice.js');
let I2CDeviceIdentification = require('./I2CDeviceIdentification.js');
let GPIOPull = require('./GPIOPull.js');
let GPIOIdentifier = require('./GPIOIdentifier.js');
let InterconnectCyclic_CustomData = require('./InterconnectCyclic_CustomData.js');
let InterconnectCyclic_Feedback_tool_feedback = require('./InterconnectCyclic_Feedback_tool_feedback.js');
let InterconnectCyclic_Feedback = require('./InterconnectCyclic_Feedback.js');
let InterconnectCyclic_MessageId = require('./InterconnectCyclic_MessageId.js');
let InterconnectCyclic_Command_tool_command = require('./InterconnectCyclic_Command_tool_command.js');
let InterconnectCyclic_ServiceVersion = require('./InterconnectCyclic_ServiceVersion.js');
let InterconnectCyclic_Command = require('./InterconnectCyclic_Command.js');
let InterconnectCyclic_CustomData_tool_customData = require('./InterconnectCyclic_CustomData_tool_customData.js');
let InterfaceModuleType = require('./InterfaceModuleType.js');
let WristType = require('./WristType.js');
let CompleteProductConfiguration = require('./CompleteProductConfiguration.js');
let ProductConfigurationEndEffectorType = require('./ProductConfigurationEndEffectorType.js');
let ModelId = require('./ModelId.js');
let BaseType = require('./BaseType.js');
let ArmLaterality = require('./ArmLaterality.js');
let EndEffectorType = require('./EndEffectorType.js');
let VisionModuleType = require('./VisionModuleType.js');
let FrameRate = require('./FrameRate.js');
let TranslationVector = require('./TranslationVector.js');
let VisionConfig_RotationMatrixRow = require('./VisionConfig_RotationMatrixRow.js');
let SensorSettings = require('./SensorSettings.js');
let VisionConfig_ServiceVersion = require('./VisionConfig_ServiceVersion.js');
let ExtrinsicParameters = require('./ExtrinsicParameters.js');
let BitRate = require('./BitRate.js');
let SensorFocusAction_action_parameters = require('./SensorFocusAction_action_parameters.js');
let VisionEvent = require('./VisionEvent.js');
let SensorIdentifier = require('./SensorIdentifier.js');
let VisionConfig_RotationMatrix = require('./VisionConfig_RotationMatrix.js');
let ManualFocus = require('./ManualFocus.js');
let OptionInformation = require('./OptionInformation.js');
let DistortionCoefficients = require('./DistortionCoefficients.js');
let Sensor = require('./Sensor.js');
let FocusPoint = require('./FocusPoint.js');
let IntrinsicProfileIdentifier = require('./IntrinsicProfileIdentifier.js');
let VisionNotification = require('./VisionNotification.js');
let OptionValue = require('./OptionValue.js');
let IntrinsicParameters = require('./IntrinsicParameters.js');
let Option = require('./Option.js');
let OptionIdentifier = require('./OptionIdentifier.js');
let Resolution = require('./Resolution.js');
let SensorFocusAction = require('./SensorFocusAction.js');
let FocusAction = require('./FocusAction.js');
let FollowCartesianTrajectoryActionFeedback = require('./FollowCartesianTrajectoryActionFeedback.js');
let FollowCartesianTrajectoryAction = require('./FollowCartesianTrajectoryAction.js');
let FollowCartesianTrajectoryGoal = require('./FollowCartesianTrajectoryGoal.js');
let FollowCartesianTrajectoryActionResult = require('./FollowCartesianTrajectoryActionResult.js');
let FollowCartesianTrajectoryResult = require('./FollowCartesianTrajectoryResult.js');
let FollowCartesianTrajectoryActionGoal = require('./FollowCartesianTrajectoryActionGoal.js');
let FollowCartesianTrajectoryFeedback = require('./FollowCartesianTrajectoryFeedback.js');

module.exports = {
  ApiOptions: ApiOptions,
  KortexError: KortexError,
  SubErrorCodes: SubErrorCodes,
  ErrorCodes: ErrorCodes,
  ControlLoop: ControlLoop,
  AxisOffsets: AxisOffsets,
  CoggingFeedforwardMode: CoggingFeedforwardMode,
  CoggingFeedforwardModeInformation: CoggingFeedforwardModeInformation,
  TorqueCalibration: TorqueCalibration,
  RampResponse: RampResponse,
  ActuatorConfig_ControlMode: ActuatorConfig_ControlMode,
  ActuatorConfig_ServiceVersion: ActuatorConfig_ServiceVersion,
  ControlLoopParameters: ControlLoopParameters,
  AxisPosition: AxisPosition,
  PositionCommand: PositionCommand,
  ControlLoopSelection: ControlLoopSelection,
  Servoing: Servoing,
  ActuatorConfig_ControlModeInformation: ActuatorConfig_ControlModeInformation,
  EncoderDerivativeParameters: EncoderDerivativeParameters,
  CustomDataSelection: CustomDataSelection,
  LoopSelection: LoopSelection,
  StepResponse: StepResponse,
  FrequencyResponse: FrequencyResponse,
  VectorDriveParameters: VectorDriveParameters,
  SafetyIdentifierBankA: SafetyIdentifierBankA,
  CustomDataIndex: CustomDataIndex,
  CommandModeInformation: CommandModeInformation,
  CommandMode: CommandMode,
  TorqueOffset: TorqueOffset,
  ActuatorConfig_SafetyLimitType: ActuatorConfig_SafetyLimitType,
  ActuatorCyclic_MessageId: ActuatorCyclic_MessageId,
  ActuatorCyclic_Command: ActuatorCyclic_Command,
  ActuatorCyclic_ServiceVersion: ActuatorCyclic_ServiceVersion,
  ActuatorCyclic_CustomData: ActuatorCyclic_CustomData,
  StatusFlags: StatusFlags,
  CommandFlags: CommandFlags,
  ActuatorCyclic_Feedback: ActuatorCyclic_Feedback,
  Query: Query,
  ShapeType: ShapeType,
  Base_ServiceVersion: Base_ServiceVersion,
  MappingInfoNotification: MappingInfoNotification,
  AngularWaypoint: AngularWaypoint,
  ArmStateNotification: ArmStateNotification,
  FactoryNotification: FactoryNotification,
  OperatingModeInformation: OperatingModeInformation,
  FullUserProfile: FullUserProfile,
  Xbox360DigitalInputIdentifier: Xbox360DigitalInputIdentifier,
  SequenceTask: SequenceTask,
  ProtectionZoneNotificationList: ProtectionZoneNotificationList,
  WrenchMode: WrenchMode,
  GripperMode: GripperMode,
  ControllerList: ControllerList,
  SequenceTasks: SequenceTasks,
  UserNotificationList: UserNotificationList,
  Gen3GpioPinId: Gen3GpioPinId,
  Faults: Faults,
  ZoneShape: ZoneShape,
  ControllerConfigurationList: ControllerConfigurationList,
  JointAngle: JointAngle,
  ConfigurationChangeNotificationList: ConfigurationChangeNotificationList,
  IPv4Configuration: IPv4Configuration,
  WristDigitalInputIdentifier: WristDigitalInputIdentifier,
  RobotEventNotification: RobotEventNotification,
  SequenceTasksPair: SequenceTasksPair,
  ControllerBehavior: ControllerBehavior,
  BridgeIdentifier: BridgeIdentifier,
  CartesianLimitation: CartesianLimitation,
  ActuatorInformation: ActuatorInformation,
  SnapshotType: SnapshotType,
  ActionNotification: ActionNotification,
  SequenceInfoNotification: SequenceInfoNotification,
  EventIdSequenceInfoNotification: EventIdSequenceInfoNotification,
  GpioCommand: GpioCommand,
  ProtectionZoneInformation: ProtectionZoneInformation,
  WrenchCommand: WrenchCommand,
  Base_RotationMatrixRow: Base_RotationMatrixRow,
  ControllerInputType: ControllerInputType,
  Base_ControlMode: Base_ControlMode,
  Action: Action,
  ProtectionZone: ProtectionZone,
  SequenceTasksConfiguration: SequenceTasksConfiguration,
  GpioPinPropertyFlags: GpioPinPropertyFlags,
  ActionList: ActionList,
  PreComputedJointTrajectoryElement: PreComputedJointTrajectoryElement,
  SystemTime: SystemTime,
  EmergencyStop: EmergencyStop,
  ConstrainedJointAngles: ConstrainedJointAngles,
  WifiInformation: WifiInformation,
  ControllerNotification_state: ControllerNotification_state,
  Base_Position: Base_Position,
  Gripper: Gripper,
  ActionHandle: ActionHandle,
  SwitchControlMapping: SwitchControlMapping,
  Twist: Twist,
  ServoingModeNotificationList: ServoingModeNotificationList,
  WaypointValidationReport: WaypointValidationReport,
  ControllerNotification: ControllerNotification,
  Base_ControlModeNotification: Base_ControlModeNotification,
  MapGroupList: MapGroupList,
  ConstrainedOrientation: ConstrainedOrientation,
  TrajectoryInfoType: TrajectoryInfoType,
  LedState: LedState,
  NetworkNotificationList: NetworkNotificationList,
  GripperRequest: GripperRequest,
  BridgeResult: BridgeResult,
  NetworkHandle: NetworkHandle,
  OperatingModeNotification: OperatingModeNotification,
  JointTrajectoryConstraintType: JointTrajectoryConstraintType,
  SequenceInformation: SequenceInformation,
  RobotEvent: RobotEvent,
  LimitationType: LimitationType,
  JointSpeed: JointSpeed,
  TrajectoryContinuityMode: TrajectoryContinuityMode,
  TwistLimitation: TwistLimitation,
  Snapshot: Snapshot,
  NetworkNotification: NetworkNotification,
  TransformationRow: TransformationRow,
  ActionEvent: ActionEvent,
  ControllerState: ControllerState,
  JointNavigationDirection: JointNavigationDirection,
  Wrench: Wrench,
  IPv4Information: IPv4Information,
  GpioAction: GpioAction,
  Pose: Pose,
  TwistCommand: TwistCommand,
  MapElement: MapElement,
  SequenceInfoNotificationList: SequenceInfoNotificationList,
  Admittance: Admittance,
  ServoingModeNotification: ServoingModeNotification,
  Delay: Delay,
  Timeout: Timeout,
  JointTorques: JointTorques,
  ActionExecutionState: ActionExecutionState,
  ProtectionZoneHandle: ProtectionZoneHandle,
  FirmwareBundleVersions: FirmwareBundleVersions,
  Base_CapSenseConfig: Base_CapSenseConfig,
  ActionNotificationList: ActionNotificationList,
  PreComputedJointTrajectory: PreComputedJointTrajectory,
  JointTorque: JointTorque,
  ControllerConfigurationMode: ControllerConfigurationMode,
  NavigationDirection: NavigationDirection,
  Waypoint_type_of_waypoint: Waypoint_type_of_waypoint,
  WifiSecurityType: WifiSecurityType,
  TrajectoryErrorType: TrajectoryErrorType,
  WifiConfigurationList: WifiConfigurationList,
  WrenchLimitation: WrenchLimitation,
  TrajectoryErrorElement: TrajectoryErrorElement,
  UserList: UserList,
  JointTrajectoryConstraint: JointTrajectoryConstraint,
  MappingInfoNotificationList: MappingInfoNotificationList,
  PasswordChange: PasswordChange,
  WifiConfiguration: WifiConfiguration,
  SequenceList: SequenceList,
  AdmittanceMode: AdmittanceMode,
  TransformationMatrix: TransformationMatrix,
  WifiInformationList: WifiInformationList,
  ServoingModeInformation: ServoingModeInformation,
  ChangeJointSpeeds: ChangeJointSpeeds,
  CartesianSpeed: CartesianSpeed,
  ConfigurationChangeNotification_configuration_change: ConfigurationChangeNotification_configuration_change,
  OperatingMode: OperatingMode,
  AdvancedSequenceHandle: AdvancedSequenceHandle,
  ProtectionZoneList: ProtectionZoneList,
  SoundType: SoundType,
  ControllerElementEventType: ControllerElementEventType,
  Base_Stop: Base_Stop,
  Orientation: Orientation,
  SafetyNotificationList: SafetyNotificationList,
  NetworkType: NetworkType,
  BridgePortConfig: BridgePortConfig,
  GripperCommand: GripperCommand,
  CartesianTrajectoryConstraint_type: CartesianTrajectoryConstraint_type,
  ControllerType: ControllerType,
  FirmwareComponentVersion: FirmwareComponentVersion,
  MapEvent_events: MapEvent_events,
  ControllerConfiguration: ControllerConfiguration,
  WifiEncryptionType: WifiEncryptionType,
  ConstrainedPose: ConstrainedPose,
  Base_SafetyIdentifier: Base_SafetyIdentifier,
  Mapping: Mapping,
  UserProfileList: UserProfileList,
  Finger: Finger,
  KinematicTrajectoryConstraints: KinematicTrajectoryConstraints,
  JointAngles: JointAngles,
  JointsLimitationsList: JointsLimitationsList,
  MapEvent: MapEvent,
  Base_JointSpeeds: Base_JointSpeeds,
  Waypoint: Waypoint,
  FactoryEvent: FactoryEvent,
  BridgeType: BridgeType,
  BridgeConfig: BridgeConfig,
  ActionType: ActionType,
  MappingHandle: MappingHandle,
  UserProfile: UserProfile,
  TrajectoryErrorIdentifier: TrajectoryErrorIdentifier,
  JointLimitation: JointLimitation,
  MappingList: MappingList,
  SequenceTaskConfiguration: SequenceTaskConfiguration,
  Base_ControlModeInformation: Base_ControlModeInformation,
  Xbox360AnalogInputIdentifier: Xbox360AnalogInputIdentifier,
  MapList: MapList,
  OperatingModeNotificationList: OperatingModeNotificationList,
  Ssid: Ssid,
  MapGroup: MapGroup,
  ControllerElementState: ControllerElementState,
  BridgeList: BridgeList,
  SignalQuality: SignalQuality,
  Base_GpioConfiguration: Base_GpioConfiguration,
  ProtectionZoneNotification: ProtectionZoneNotification,
  Sequence: Sequence,
  RobotEventNotificationList: RobotEventNotificationList,
  UserNotification: UserNotification,
  ArmStateInformation: ArmStateInformation,
  MapHandle: MapHandle,
  ControllerNotificationList: ControllerNotificationList,
  BridgeStatus: BridgeStatus,
  FullIPv4Configuration: FullIPv4Configuration,
  SafetyEvent: SafetyEvent,
  BackupEvent: BackupEvent,
  TrajectoryErrorReport: TrajectoryErrorReport,
  CommunicationInterfaceConfiguration: CommunicationInterfaceConfiguration,
  IKData: IKData,
  GpioPinConfiguration: GpioPinConfiguration,
  ConstrainedJointAngle: ConstrainedJointAngle,
  Action_action_parameters: Action_action_parameters,
  WaypointList: WaypointList,
  ControllerEvent: ControllerEvent,
  CartesianLimitationList: CartesianLimitationList,
  SequenceHandle: SequenceHandle,
  ConfigurationChangeNotification: ConfigurationChangeNotification,
  Base_RotationMatrix: Base_RotationMatrix,
  ProtectionZoneEvent: ProtectionZoneEvent,
  ActivateMapHandle: ActivateMapHandle,
  ControllerEventType: ControllerEventType,
  SequenceTaskHandle: SequenceTaskHandle,
  ControlModeNotificationList: ControlModeNotificationList,
  ServoingMode: ServoingMode,
  GpioBehavior: GpioBehavior,
  ControllerElementHandle_identifier: ControllerElementHandle_identifier,
  TrajectoryInfo: TrajectoryInfo,
  MapGroupHandle: MapGroupHandle,
  ChangeTwist: ChangeTwist,
  ConstrainedPosition: ConstrainedPosition,
  ConfigurationNotificationEvent: ConfigurationNotificationEvent,
  GpioEvent: GpioEvent,
  RequestedActionType: RequestedActionType,
  CartesianTrajectoryConstraint: CartesianTrajectoryConstraint,
  GpioConfigurationList: GpioConfigurationList,
  UserEvent: UserEvent,
  SequenceTasksRange: SequenceTasksRange,
  NetworkEvent: NetworkEvent,
  ChangeWrench: ChangeWrench,
  Map: Map,
  Base_CapSenseMode: Base_CapSenseMode,
  AppendActionInformation: AppendActionInformation,
  CartesianWaypoint: CartesianWaypoint,
  ControllerElementHandle: ControllerElementHandle,
  ControllerHandle: ControllerHandle,
  Point: Point,
  ActuatorCommand: ActuatorCommand,
  ActuatorFeedback: ActuatorFeedback,
  BaseCyclic_Feedback: BaseCyclic_Feedback,
  ActuatorCustomData: ActuatorCustomData,
  BaseCyclic_Command: BaseCyclic_Command,
  BaseCyclic_CustomData: BaseCyclic_CustomData,
  BaseCyclic_ServiceVersion: BaseCyclic_ServiceVersion,
  BaseFeedback: BaseFeedback,
  UserProfileHandle: UserProfileHandle,
  CartesianReferenceFrame: CartesianReferenceFrame,
  CountryCode: CountryCode,
  UARTConfiguration: UARTConfiguration,
  DeviceHandle: DeviceHandle,
  UARTParity: UARTParity,
  Permission: Permission,
  CountryCodeIdentifier: CountryCodeIdentifier,
  UARTSpeed: UARTSpeed,
  UARTWordLength: UARTWordLength,
  DeviceTypes: DeviceTypes,
  Empty: Empty,
  SafetyStatusValue: SafetyStatusValue,
  Unit: Unit,
  ArmState: ArmState,
  Connection: Connection,
  UARTDeviceIdentification: UARTDeviceIdentification,
  UARTStopBits: UARTStopBits,
  SafetyHandle: SafetyHandle,
  NotificationHandle: NotificationHandle,
  Timestamp: Timestamp,
  NotificationType: NotificationType,
  SafetyNotification: SafetyNotification,
  NotificationOptions: NotificationOptions,
  KinematicLimitsList: KinematicLimitsList,
  JointSpeedSoftLimits: JointSpeedSoftLimits,
  ControlConfigurationEvent: ControlConfigurationEvent,
  ControlConfig_Position: ControlConfig_Position,
  ControlConfigurationNotification: ControlConfigurationNotification,
  ControlConfig_ControlModeInformation: ControlConfig_ControlModeInformation,
  ControlConfig_ControlModeNotification: ControlConfig_ControlModeNotification,
  TwistLinearSoftLimit: TwistLinearSoftLimit,
  ControlConfig_JointSpeeds: ControlConfig_JointSpeeds,
  ToolConfiguration: ToolConfiguration,
  CartesianReferenceFrameInfo: CartesianReferenceFrameInfo,
  LinearTwist: LinearTwist,
  TwistAngularSoftLimit: TwistAngularSoftLimit,
  AngularTwist: AngularTwist,
  DesiredSpeeds: DesiredSpeeds,
  CartesianTransform: CartesianTransform,
  ControlConfig_ServiceVersion: ControlConfig_ServiceVersion,
  GravityVector: GravityVector,
  ControlConfig_ControlMode: ControlConfig_ControlMode,
  JointAccelerationSoftLimits: JointAccelerationSoftLimits,
  KinematicLimits: KinematicLimits,
  PayloadInformation: PayloadInformation,
  DeviceConfig_CapSenseConfig: DeviceConfig_CapSenseConfig,
  RebootRqst: RebootRqst,
  RunModes: RunModes,
  CalibrationElement: CalibrationElement,
  CalibrationParameter: CalibrationParameter,
  MACAddress: MACAddress,
  SafetyInformation: SafetyInformation,
  Calibration: Calibration,
  CalibrationItem: CalibrationItem,
  PartNumberRevision: PartNumberRevision,
  DeviceType: DeviceType,
  CalibrationResult: CalibrationResult,
  SafetyStatus: SafetyStatus,
  CapSenseRegister: CapSenseRegister,
  ModelNumber: ModelNumber,
  RunMode: RunMode,
  SafetyConfigurationList: SafetyConfigurationList,
  CalibrationParameter_value: CalibrationParameter_value,
  SafetyThreshold: SafetyThreshold,
  BootloaderVersion: BootloaderVersion,
  PartNumber: PartNumber,
  SafetyEnable: SafetyEnable,
  SafetyConfiguration: SafetyConfiguration,
  CalibrationStatus: CalibrationStatus,
  DeviceConfig_CapSenseMode: DeviceConfig_CapSenseMode,
  PowerOnSelfTestResult: PowerOnSelfTestResult,
  SafetyInformationList: SafetyInformationList,
  IPv4Settings: IPv4Settings,
  FirmwareVersion: FirmwareVersion,
  SerialNumber: SerialNumber,
  DeviceConfig_SafetyLimitType: DeviceConfig_SafetyLimitType,
  DeviceConfig_ServiceVersion: DeviceConfig_ServiceVersion,
  DeviceHandles: DeviceHandles,
  DeviceManager_ServiceVersion: DeviceManager_ServiceVersion,
  GripperConfig_SafetyIdentifier: GripperConfig_SafetyIdentifier,
  RobotiqGripperStatusFlags: RobotiqGripperStatusFlags,
  GripperCyclic_CustomData: GripperCyclic_CustomData,
  MotorCommand: MotorCommand,
  CustomDataUnit: CustomDataUnit,
  GripperCyclic_Feedback: GripperCyclic_Feedback,
  MotorFeedback: MotorFeedback,
  GripperCyclic_ServiceVersion: GripperCyclic_ServiceVersion,
  GripperCyclic_Command: GripperCyclic_Command,
  GripperCyclic_MessageId: GripperCyclic_MessageId,
  InterconnectConfig_SafetyIdentifier: InterconnectConfig_SafetyIdentifier,
  InterconnectConfig_GPIOConfiguration: InterconnectConfig_GPIOConfiguration,
  I2CMode: I2CMode,
  I2CWriteRegisterParameter: I2CWriteRegisterParameter,
  I2CData: I2CData,
  EthernetSpeed: EthernetSpeed,
  I2CReadRegisterParameter: I2CReadRegisterParameter,
  EthernetDeviceIdentification: EthernetDeviceIdentification,
  I2CDeviceAddressing: I2CDeviceAddressing,
  InterconnectConfig_ServiceVersion: InterconnectConfig_ServiceVersion,
  I2CWriteParameter: I2CWriteParameter,
  UARTPortId: UARTPortId,
  I2CReadParameter: I2CReadParameter,
  GPIOMode: GPIOMode,
  GPIOIdentification: GPIOIdentification,
  GPIOState: GPIOState,
  EthernetDuplex: EthernetDuplex,
  I2CConfiguration: I2CConfiguration,
  EthernetConfiguration: EthernetConfiguration,
  I2CRegisterAddressSize: I2CRegisterAddressSize,
  EthernetDevice: EthernetDevice,
  GPIOValue: GPIOValue,
  I2CDevice: I2CDevice,
  I2CDeviceIdentification: I2CDeviceIdentification,
  GPIOPull: GPIOPull,
  GPIOIdentifier: GPIOIdentifier,
  InterconnectCyclic_CustomData: InterconnectCyclic_CustomData,
  InterconnectCyclic_Feedback_tool_feedback: InterconnectCyclic_Feedback_tool_feedback,
  InterconnectCyclic_Feedback: InterconnectCyclic_Feedback,
  InterconnectCyclic_MessageId: InterconnectCyclic_MessageId,
  InterconnectCyclic_Command_tool_command: InterconnectCyclic_Command_tool_command,
  InterconnectCyclic_ServiceVersion: InterconnectCyclic_ServiceVersion,
  InterconnectCyclic_Command: InterconnectCyclic_Command,
  InterconnectCyclic_CustomData_tool_customData: InterconnectCyclic_CustomData_tool_customData,
  InterfaceModuleType: InterfaceModuleType,
  WristType: WristType,
  CompleteProductConfiguration: CompleteProductConfiguration,
  ProductConfigurationEndEffectorType: ProductConfigurationEndEffectorType,
  ModelId: ModelId,
  BaseType: BaseType,
  ArmLaterality: ArmLaterality,
  EndEffectorType: EndEffectorType,
  VisionModuleType: VisionModuleType,
  FrameRate: FrameRate,
  TranslationVector: TranslationVector,
  VisionConfig_RotationMatrixRow: VisionConfig_RotationMatrixRow,
  SensorSettings: SensorSettings,
  VisionConfig_ServiceVersion: VisionConfig_ServiceVersion,
  ExtrinsicParameters: ExtrinsicParameters,
  BitRate: BitRate,
  SensorFocusAction_action_parameters: SensorFocusAction_action_parameters,
  VisionEvent: VisionEvent,
  SensorIdentifier: SensorIdentifier,
  VisionConfig_RotationMatrix: VisionConfig_RotationMatrix,
  ManualFocus: ManualFocus,
  OptionInformation: OptionInformation,
  DistortionCoefficients: DistortionCoefficients,
  Sensor: Sensor,
  FocusPoint: FocusPoint,
  IntrinsicProfileIdentifier: IntrinsicProfileIdentifier,
  VisionNotification: VisionNotification,
  OptionValue: OptionValue,
  IntrinsicParameters: IntrinsicParameters,
  Option: Option,
  OptionIdentifier: OptionIdentifier,
  Resolution: Resolution,
  SensorFocusAction: SensorFocusAction,
  FocusAction: FocusAction,
  FollowCartesianTrajectoryActionFeedback: FollowCartesianTrajectoryActionFeedback,
  FollowCartesianTrajectoryAction: FollowCartesianTrajectoryAction,
  FollowCartesianTrajectoryGoal: FollowCartesianTrajectoryGoal,
  FollowCartesianTrajectoryActionResult: FollowCartesianTrajectoryActionResult,
  FollowCartesianTrajectoryResult: FollowCartesianTrajectoryResult,
  FollowCartesianTrajectoryActionGoal: FollowCartesianTrajectoryActionGoal,
  FollowCartesianTrajectoryFeedback: FollowCartesianTrajectoryFeedback,
};
